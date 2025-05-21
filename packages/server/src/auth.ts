import { betterAuth } from 'better-auth';
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from './db.js';
import * as schema from './schemas/index.js';

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true
  }
});

export default auth;
