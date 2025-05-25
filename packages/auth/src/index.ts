import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono<{ Bindings: Env; }>();

app.use(logger());
app.get('/', (c) => c.json({ success: true }));

export default app;
