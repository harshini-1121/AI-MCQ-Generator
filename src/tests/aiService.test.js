const generateMCQs = require("../services/aiService");

describe("AI Service", () => {

  test("should generate MCQs from markdown notes", async () => {

    const notes = `
# REST API

REST API is an architectural style used for communication between systems over HTTP.

GET retrieves data.
POST creates data.
PUT updates data.
DELETE removes data.
`;

    const mcqs = await generateMCQs(notes);

    expect(Array.isArray(mcqs)).toBe(true);

    expect(mcqs.length).toBeGreaterThan(0);

    expect(mcqs[0]).toHaveProperty("question");

    expect(mcqs[0]).toHaveProperty("options");

    expect(mcqs[0]).toHaveProperty("correct");

    expect(mcqs[0]).toHaveProperty("explanation");

  });

});