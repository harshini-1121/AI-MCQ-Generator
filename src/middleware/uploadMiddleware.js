const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {

  if (path.extname(file.originalname) !== ".md") {

    return cb(
      new Error("Only markdown (.md) files are allowed")
    );

  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter
});

module.exports = upload;