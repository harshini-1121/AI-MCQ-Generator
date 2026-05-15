const request = require("supertest");

const app = require("../app");

describe("POST /api/generate-mcq", () => {

  test("should return 400 if no markdown file uploaded", async () => {

    const response = await request(app)
      .post("/api/generate-mcq");

    expect(response.statusCode).toBe(400);

    expect(response.body.success).toBe(false);

  });

});