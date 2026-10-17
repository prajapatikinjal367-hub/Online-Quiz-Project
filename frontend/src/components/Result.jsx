function getFeedback(score) {
  if (score <= 5) {
    return {
      emoji: "😟",
      title: "You need to work much harder",
      text: "Don't give up. Revise this topic and try again!",
      level: "low",
    };
  }
  if (score <= 10) {
    return {
      emoji: "🙂",
      title: "Good, but a little more effort is needed",
      text: "You are on the right track. A bit more practice will help.",
      level: "mid",
    };
  }
  if (score <= 13) {
    return {
      emoji: "😃",
      title: "Very good!",
      text: "Just a little more effort and you will be at the top.",
      level: "good",
    };
  }
  return {
    emoji: "🏆",
    title: "Excellent!",
    text: "Outstanding performance. Keep it up!",
    level: "excellent",
  };
}

function Result({ result, topicName, onRetry, onTopics }) {
  const feedback = getFeedback(result.score);
  const percent = Math.round((result.score / result.total) * 100);

  return (
    <div className="card center">
      <h2 className="result-title">{topicName} Quiz Complete! 🎉</h2>

      <div
        className={`score-ring ${feedback.level}`}
        style={{ "--pct": `${percent}%` }}
      >
        <div className="score-inner">
          <span className="score-num">{result.score}</span>
          <span className="score-total">out of {result.total}</span>
        </div>
      </div>

      <div className={`feedback ${feedback.level}`}>
        <div className="feedback-emoji">{feedback.emoji}</div>
        <h3>{feedback.title}</h3>
        <p>{feedback.text}</p>
      </div>

      <div className="result-buttons">
        <button className="restart-btn" onClick={onRetry}>
          Try again
        </button>
        <button className="secondary-btn" onClick={onTopics}>
          Choose another topic
        </button>
      </div>
    </div>
  );
}

export default Result;
