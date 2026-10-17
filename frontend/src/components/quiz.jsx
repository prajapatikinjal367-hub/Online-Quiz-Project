import { useState, useEffect, useRef } from "react";

const letters = ["A", "B", "C", "D"];
const SECONDS_PER_QUESTION = 40; // 15 questions = 15 minutes

// 905 seconds -> "15:05"
function formatTime(total) {
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function Quiz({ questions, onSubmit }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(
    questions.length * SECONDS_PER_QUESTION,
  );

  // Always holds the latest answers (needed when the timer ends)
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const submittedRef = useRef(false);

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const percent = ((current + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  const selectOption = (index) => {
    setAnswers({ ...answers, [q._id]: index });
  };

  // Send the answers only once (Submit button or time over)
  const submitQuiz = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    try {
      await onSubmit(answersRef.current);
    } catch (err) {
      submittedRef.current = false; // sending failed, the user can try again
    }
  };

  // Count down every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => Math.max(s - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Time is over: submit automatically
  useEffect(() => {
    if (secondsLeft === 0) submitQuiz();
  }, [secondsLeft]);

  return (
    <div className="card">
      <div className="quiz-top">
        <span>
          Question {current + 1} of {questions.length}
        </span>
        <span className={`timer ${secondsLeft <= 60 ? "low" : ""}`}>
          ⏱ {formatTime(secondsLeft)}
        </span>
        <span>{answeredCount} answered</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>

      {/* Question numbers: click any number to jump to that question */}
      <div className="q-nav">
        {questions.map((item, i) => (
          <button
            key={item._id}
            className={`q-dot ${answers[item._id] !== undefined ? "done" : ""} ${
              i === current ? "active" : ""
            }`}
            onClick={() => setCurrent(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <h2 className="q-text">{q.question}</h2>

      {q.options.map((opt, i) => (
        <button
          key={i}
          className={`option ${answers[q._id] === i ? "selected" : ""}`}
          onClick={() => selectOption(i)}
        >
          <span className="letter">{letters[i]}</span>
          <span>{opt}</span>
        </button>
      ))}

      <div className="nav">
        <button
          className="ghost"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          ← Previous
        </button>

        {isLast ? (
          <button className="submit" onClick={submitQuiz}>
            Submit ✓
          </button>
        ) : (
          <button onClick={() => setCurrent(current + 1)}>Next →</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
