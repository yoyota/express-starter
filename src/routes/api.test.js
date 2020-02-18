const request = require("supertest")
const app = require("../app")

test("test api route", async () => {
  const res = await request(app).get("/api")
  expect(res.status).toEqual(200)
})
