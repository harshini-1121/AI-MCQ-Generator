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

Read the following study notes carefully and generate 5 multiple choice questions.

Rules:
- Each question must contain:
  - question
  - 4 options (a,b,c,d)
  - correct answer
  - explanation/reason
- Only one correct answer
- Questions must be based ONLY on the provided notes
- Return STRICT JSON ARRAY ONLY
- Do not include markdown formatting
- Do not include extra text

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