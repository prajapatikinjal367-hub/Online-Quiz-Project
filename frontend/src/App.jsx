import { useState } from "react";
import Auth from "./components/Auth";
import Topics from "./components/Topics";
import Quiz from "./components/quiz";
import Result from "./components/Result";

const API = "http://localhost:5000/api/quiz";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const handleLogin = (newToken, userName) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("name", userName);
    setToken(newToken);
    setName(userName);
  };

  const goToTopics = () => {
    setTopic(null);
    setQuestions([]);
    setResult(null);
    setMessage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken(null);
    setName(null);
    goToTopics();
  };

  const selectTopic = async (t) => {
    setLoading(true);
    setMessage("");
    setResult(null);

    try {
      const res = await fetch(`${API}/questions/${t.id}`, {
        headers: authHeaders,
      });

      if (res.status === 401) {
        handleLogout();
        return;
      }

      const data = await res.json();

      if (data.length === 0) {
        setMessage(`Questions for ${t.name} have not been added yet.`);
      } else {
        setQuestions(data);
        setTopic(t);
      }
    } catch (err) {
      setMessage("Could not load questions. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (answers) => {
    const res = await fetch(`${API}/submit`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ topic: topic.id, answers }),
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="app">
      <div className="deco deco-note">
        Small
        <br />
        steps
        <br />
        Big progress ♥
      </div>
      <div className="deco deco-bulb">💡</div>

      <div className={`container ${token && !topic ? "wide" : ""}`}>
        {!token ? (
          <>
            <div className="hero">
              <h1 className="page-title">
                <span className="brush">Online Quiz</span>
              </h1>
              <p className="hero-sub">Login and test your knowledge!</p>
            </div>
            <Auth onLogin={handleLogin} />
          </>
        ) : (
          <>
            <div className="topbar">
              <span>Hi, {name} 👋</span>
              <button onClick={handleLogout}>Logout</button>
            </div>

            {loading ? (
              <p className="loading">Loading...</p>
            ) : result ? (
              <Result
                result={result}
                topicName={topic.name}
                onRetry={() => selectTopic(topic)}
                onTopics={goToTopics}
              />
            ) : topic ? (
              <>
                <div className="quiz-head">
                  <button className="back-btn" onClick={goToTopics}>
                    ← Topics
                  </button>
                  <h3>
                    {topic.icon} {topic.name}
                  </h3>
                </div>
                <Quiz questions={questions} onSubmit={handleSubmit} />
              </>
            ) : (
              <Topics onSelect={selectTopic} message={message} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
