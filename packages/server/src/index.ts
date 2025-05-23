import { Hono } from 'hono';
import { auth } from './auth';

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
app.get('/', (c) => c.json({ success: true }));

export default app;
