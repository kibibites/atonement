import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.json({ success: true }));

export default app;
