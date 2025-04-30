import { Client, Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

async function query(queryObject) {
  // const client = new Client({
  //   host: process.env.POSTGRES_HOST,
  //   user: process.env.POSTGRES_USER,
  //   database: process.env.POSTGRES_DB,
  //   password: process.env.POSTGRES_PASSWORD,
  //   port: process.env.POSTGRES_PORT,
  //   ssl: getSSLValues(),
  // });

  try {
    await pool.connect();
    const result = await pool.query(queryObject);
    return result;
  } catch (error) {
    console.error("Erro ao executar query:", error);
    throw error;
  } 
  // finally {
  //   await client.end();
  // }
}

export default {
  query,
};

// function getSSLValues() {
//   if (process.env.POSTGRES_CA) {
//     return {
//       ca: process.env.POSTGRES_CA,
//     };
//   }

//   return process.env.NODE_ENV === "development" ? false : true;
// }
