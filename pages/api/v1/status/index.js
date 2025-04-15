import database from "infra/database.js";

async function status(req, res) {
  const updatedAt = new Date().toISOString();
  
  const serverVersionResult = await database.query(`SHOW server_version;`);
  const serverVersionValue = serverVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query(`SHOW max_connections;`);
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const dbName = process.env.POSTGRES_DB;
  const openedConnections = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;`,
    values: [dbName],});
  const openedConnectionsValue = openedConnections.rows[0].count;

  res.status(200).json({
    updated_at: updatedAt,
    dependences: {
      database: {
        server_version: serverVersionValue,
        max_connections: parseInt(maxConnectionsValue),
        opened_connections: openedConnectionsValue,
      }
    }
  });
}

export default status;
