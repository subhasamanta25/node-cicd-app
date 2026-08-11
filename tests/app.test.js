const request = require("supertest");
const app = require("../app");

describe("Application Routes", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello from Node.js app");
  });

  test("GET /health should return status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  test("GET /about should return application information", async () => {
    const response = await request(app).get("/about");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("CI/CD Demo Application");
  });

  test("GET /unknown should return 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);
  });
});