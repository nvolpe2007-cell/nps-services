import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@shared/schema";

let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL must be set. Database operations require a valid connection string.");
    }
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    pool.on("error", (err) => {
      console.error("Unexpected database pool error:", err.message);
    });
  }
  return pool;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop, receiver) {
    const realDb = drizzle(getPool(), { schema });
    return Reflect.get(realDb, prop, receiver);
  },
});
