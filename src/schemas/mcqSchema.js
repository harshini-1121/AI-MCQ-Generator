const { z } = require("zod");

const mcqSchema = z.array(
  z.object({
    question: z.string(),

    options: z.object({
      a: z.string(),
      b: z.string(),
      c: z.string(),
      d: z.string()
    }),

    correct: z.string(),

    explanation: z.string()
  })
);

module.exports = mcqSchema;