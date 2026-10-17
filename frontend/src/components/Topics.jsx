const topics = [
  { id: "dbms", name: "DBMS", icon: "🗄️", bg: "#dbeafe", dark: "#3b6fd4" },
  {
    id: "webdev",
    name: "Web Development",
    sub: "(HTML, CSS, JS)",
    icon: "🌐",
    bg: "#d9f5e3",
    dark: "#2f8f66",
  },
  { id: "react", name: "React", icon: "⚛️", bg: "#e6dcfb", dark: "#7c5cd6" },
  {
    id: "cybersecurity",
    name: "Cyber Security",
    icon: "🛡️",
    bg: "#fbd9e6",
    dark: "#d94668",
  },
  {
    id: "datascience",
    name: "Data Science",
    icon: "📊",
    bg: "#fdf0c4",
    dark: "#d9961a",
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "🧩",
    bg: "#cdf3f3",
    dark: "#1f9494",
  },
  {
    id: "projectmanagement",
    name: "Project Management",
    icon: "📋",
    bg: "#e2dcf8",
    dark: "#3b2a7a",
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    icon: "☁️",
    bg: "#d9f0d5",
    dark: "#4a7c3f",
  },
  {
    id: "softwareengineering",
    name: "Software Engineering",
    icon: "⚙️",
    bg: "#fcd9e4",
    dark: "#d4476a",
  },
  {
    id: "ml",
    name: "Machine Learning",
    icon: "🧠",
    bg: "#d6e2fb",
    dark: "#2f63d9",
  },
  {
    id: "fullstack",
    name: "Full Stack Development",
    icon: "💻",
    bg: "#fde3c8",
    dark: "#e8741a",
  },
  {
    id: "misc",
    name: "Miscellaneous",
    icon: "⋯",
    bg: "#cdeeea",
    dark: "#1f8a86",
  },
];

function Topics({ onSelect, message }) {
  return (
    <div>
      <h1 className="page-title">
        <span className="brush">Quizzes</span>
      </h1>
      <p className="subtitle">Choose a topic and test your knowledge!</p>

      {message && <p className="error center">{message}</p>}

      <div className="topics-grid">
        {topics.map((t, index) => (
          <button
            key={t.id}
            className="topic-card"
            style={{ background: t.bg, "--dark": t.dark, "--i": index }}
            onClick={() => onSelect(t)}
          >
            <div className="topic-top">
              <span className="topic-icon">{t.icon}</span>
              <span className="topic-name">
                {t.name}
                {t.sub && <span className="topic-sub">{t.sub}</span>}
              </span>
            </div>
            <div className="topic-bottom">
              <span className="topic-count">15 questions</span>
              <span className="topic-arrow">→</span>
            </div>
          </button>
        ))}
      </div>

      <p className="keep-going">
        <span>♥</span> Keep going <span>♥</span>
      </p>
    </div>
  );
}

export default Topics;
