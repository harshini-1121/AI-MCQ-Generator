require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

console.log(
  "Groq Key Loaded:",
  process.env.GROQ_API_KEY ? "YES" : "NO"
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});