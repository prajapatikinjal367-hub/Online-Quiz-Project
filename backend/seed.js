// Copies the questions from data/questions.js into the MongoDB database.
const { connectDB, client } = require("./config/db");
const questionsByTopic = require("./data/questions");

async function seed() {
  const db = await connectDB();

  // Add the topic name to every question
  const all = [];
  Object.keys(questionsByTopic).forEach((topic) => {
    questionsByTopic[topic].forEach((q) => {
      all.push({ topic, ...q });
    });
  });

  const questions = db.collection("questions");
  await questions.deleteMany({}); // remove old questions
  await questions.insertMany(all); // add the new ones

  console.log(`${all.length} questions added to the database`);
  Object.keys(questionsByTopic).forEach((topic) => {
    console.log(`  ${topic}: ${questionsByTopic[topic].length}`);
  });

  await client.close();
}

seed().catch((err) => {
  console.log("Seed error:", err.message);
  process.exit(1);
});