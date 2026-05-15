const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const readMarkdownFile = require("../utils/fileReader");

const router = express.Router();

router.post(
  "/generate-mcq",
  upload.single("file"),
  (req, res) => {

    const content = readMarkdownFile(req.file.path);

    res.json({
      message: "Markdown content extracted successfully",
      content
    });

  }
);

module.exports = router;