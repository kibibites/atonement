import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schemas';

const client = new PGlite(process.env['DATABASE_URL']!);
const db = drizzle({ client, schema });

export default db;
