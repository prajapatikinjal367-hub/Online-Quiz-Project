// All settings of the backend in one place.
module.exports = {
  PORT: process.env.PORT || 5000,

  // MongoDB (the same address you use in MongoDB Compass)
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017",
  DB_NAME: "quizapp",

  // Secret used to sign login tokens. Change it to any long random text.
  JWT_SECRET: process.env.JWT_SECRET || "change_this_to_any_long_random_text_12345",
  TOKEN_LIFETIME: 24 * 60 * 60 * 1000, // 1 day
};