const express = require("express");
const cors = require("cors");

const mcqRoutes = require("./routes/mcqRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI MCQ Generator API Running"
  });
});

app.use("/api", mcqRoutes);

module.exports = app;