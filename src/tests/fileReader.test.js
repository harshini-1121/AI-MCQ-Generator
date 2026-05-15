const fs = require("fs");

const readMarkdownFile = require("../utils/fileReader");

describe("Markdown File Reader Utility", () => {

  const testFile = "sample-test.md";

  beforeAll(() => {

    fs.writeFileSync(
      testFile,
      "# Sample Markdown Content"
    );

  });

  afterAll(() => {

    fs.unlinkSync(testFile);

  });

  test("should correctly read markdown file content", () => {

    const content = readMarkdownFile(testFile);

    expect(content).toContain("Sample Markdown Content");

  });

});