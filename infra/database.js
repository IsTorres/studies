import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

async function query(queryObject) {
  try {
    await pool.connect();
    const result = await pool.query(queryObject);
    return result;
  } catch (error) {
    console.error("Erro ao executar query:", error);
    throw error;
  }
}

export default {
  query,
};
