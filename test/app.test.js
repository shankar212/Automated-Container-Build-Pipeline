const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / returns the Hello World message", async () => {
  const response = await request(app).get("/");

  assert.equal(response.status, 200);
  assert.match(response.text, /Hello World/);
});

test("GET /health returns service health", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.equal(response.body.status, "ok");
});
