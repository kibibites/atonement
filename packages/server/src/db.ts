import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schemas/index.js';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env['DATABASE_URL']!,
});

const db = drizzle({
  client: pool,
  schema,
});

export default db;
