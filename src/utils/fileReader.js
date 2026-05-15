const fs = require("fs");

const readMarkdownFile = (filePath) => {

  try {

    const content = fs.readFileSync(filePath, "utf-8");

    return content;

  } catch (error) {

    throw new Error("Error reading markdown file");

  }

};

module.exports = readMarkdownFile;