import database from "infra/database";

beforeAll( async () => {
  await database.query("DROP schema public CASCADE; CREATE schema public;")
})

test("GET to api/v1/migrations tests", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations");

  expect(res.status).toBe(200);

  const responseBody = await res.json();

  expect(Array.isArray(responseBody)).toEqual(true);
  expect(Array(responseBody).length).toBeGreaterThan(0);
});
