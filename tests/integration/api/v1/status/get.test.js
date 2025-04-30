test("api/v1/stauts tests", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");

  expect(res.status).toBe(200);

  const responseBody = await res.json();

  const responseBodyDate = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(responseBodyDate);

  expect(responseBody.dependences.database.server_version).toEqual("16.0");
  expect(responseBody.dependences.database.max_connections).toEqual(100);
  // expect(responseBody.dependences.database.opened_connections).toEqual(1);
});
