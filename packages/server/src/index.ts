import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import auth from './auth.js';

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
app.get('/', (c) => c.json({ success: true }));

const server = serve(app);
console.log('http://localhost:3000');

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});

process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
