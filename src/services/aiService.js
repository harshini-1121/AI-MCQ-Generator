const { ChatGroq } = require("@langchain/groq");

const mcqSchema = require("../schemas/mcqSchema");

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
  temperature: 0.3
});

const generateMCQs = async (notesContent) => {

const prompt = `
You are an AI MCQ Generator.

Generate exactly 5 MCQ questions from the study notes.

IMPORTANT:
Return ONLY a valid JSON array.

Each MCQ object MUST follow this EXACT structure:

[
  {
    "question": "Question here",
    "options": {
      "a": "Option A",
      "b": "Option B",
      "c": "Option C",
      "d": "Option D"
    },
    "correct": "a",
    "explanation": "Explanation here"
  }
]

RULES:
- Do NOT return markdown
- Do NOT use triple backticks
- Do NOT include extra text
- options MUST be inside an "options" object
- correct must contain only: a,b,c,d
- Generate meaningful distractor options
- Questions must come ONLY from provided notes

Study Notes:
${notesContent}
`;

  const response = await model.invoke(prompt);

  const cleanedResponse = response.content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const parsedData = JSON.parse(cleanedResponse);
  
  const validationData = mcqSchema.safeParse(parsedData);
  
  return validationData;
};

module.exports = generateMCQs;