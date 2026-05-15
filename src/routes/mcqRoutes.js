const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/generate-mcq",
  upload.single("file"),
  (req, res) => {

    res.json({
      message: "Markdown file uploaded successfully",
      file: req.file
    });

  }
);

module.exports = router;