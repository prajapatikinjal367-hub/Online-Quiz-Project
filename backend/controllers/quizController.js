const { getDb } = require("../config/db");
const { readBody, sendJson } = require("../utils/http");

// GET /api/quiz/questions/:topic
// Sends the questions of one topic (the correct answers are NOT sent)
async function getQuestions(req, res, { params }) {
  const questions = await getDb()
    .collection("questions")
    .find({ topic: params.topic }, { projection: { correctAnswer: 0 } })
    .sort({ _id: 1 })
    .toArray();

  sendJson(res, 200, questions);
}

// POST /api/quiz/submit
// Body: { topic: "react", answers: { questionId: selectedOptionIndex } }
async function submitQuiz(req, res, { userId }) {
  const { topic, answers } = await readBody(req);

  if (typeof topic !== "string") {
    return sendJson(res, 400, { message: "Invalid topic" });
  }

  const db = getDb();
  const questions = await db.collection("questions").find({ topic }).toArray();

  if (questions.length === 0) {
    return sendJson(res, 404, { message: "Topic not found" });
  }

  // Compare the user's answers with the correct answers
  let score = 0;
  questions.forEach((q) => {
    if (answers && answers[q._id.toString()] === q.correctAnswer) score++;
  });

  await db.collection("results").insertOne({
    userId,
    topic,
    score,
    total: questions.length,
    date: new Date(),
  });

  sendJson(res, 200, { score, total: questions.length });
}

// GET /api/quiz/my-results
// Previous scores of the logged-in user
async function myResults(req, res, { userId }) {
  const results = await getDb()
    .collection("results")
    .find({ userId })
    .sort({ date: -1 })
    .toArray();

  sendJson(res, 200, results);
}

module.exports = { getQuestions, submitQuiz, myResults };