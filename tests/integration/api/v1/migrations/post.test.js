import database from "infra/database";

beforeAll( async () => {
  await database.query("DROP schema public CASCADE; CREATE schema public;")
})

test("POST to api/v1/migrations tests", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  expect(res.status).toBe(201);

  const responseBody = await res.json();

  expect(Array.isArray(responseBody)).toEqual(true);

  const query = await database.query("SELECT * FROM pgmigrations;");

  expect(Array.isArray(query.rows)).toEqual(true);
  expect(Array(query.rows).length).toBeGreaterThan(0);
});
