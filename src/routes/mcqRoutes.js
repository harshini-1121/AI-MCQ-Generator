const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const readMarkdownFile = require("../utils/fileReader");

const generateMCQs = require("../services/aiService");

const router = express.Router();

router.post(
  "/generate-mcq",
  upload.single("file"),
  async (req, res) => {

    try {

      const content = readMarkdownFile(req.file.path);

      const mcqs = await generateMCQs(content);

      res.json({
        total_questions: mcqs.length,
        questions: mcqs
      });

    } catch (error) {

      res.status(500).json({
        error: error.message
      });

    }

  }
);

module.exports = router;