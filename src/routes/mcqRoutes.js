const express = require("express");

const upload = require("../middleware/uploadMiddleware");

const generateMCQController = require("../controllers/mcqController");

const router = express.Router();

router.post(
  "/generate-mcq",
  upload.single("file"),
  generateMCQController
);

module.exports = router;