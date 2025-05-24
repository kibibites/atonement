import { Hono } from 'hono';
import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from './schemas';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

interface Variables {
  drizzle: PostgresJsDatabase<typeof schema>;
  auth: ReturnType<typeof betterAuth>;
}

const app = new Hono<{ Bindings: Env; Variables: Variables; }>();

app.use((c, next) => {
  const db = drizzle(c.env.hyperdrive.connectionString, {
    schema,
  });
  c.set("drizzle", db);
  c.set("auth", betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
      schema,
    }),
    emailAndPassword: {
      enabled: true
    }
  }));
  return next();
});

app.on(["POST", "GET"], "/api/auth/**", (c) => c.var.auth.handler(c.req.raw));
app.get('/', (c) => c.json({ success: true }));

export default app;
