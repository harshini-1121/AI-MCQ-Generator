const express = require("express");

const router = express.Router();

router.post("/generate-mcq", (req, res) => {
  res.json({
    message: "MCQ generation endpoint working"
  });
});

module.exports = router;