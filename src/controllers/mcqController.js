const readMarkdownFile = require("../utils/fileReader");

const generateMCQs = require("../services/aiService");

const generateMCQController = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: "Markdown file is required"
      });

    }

    const content = readMarkdownFile(req.file.path);

    const mcqs = await generateMCQs(content);

    res.json({
      total_questions: mcqs.length,
      questions: mcqs
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "MCQ generation failed",
      error: error.message
    });

  }

};

module.exports = generateMCQController;