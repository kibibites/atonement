import { Hono } from 'hono';
import { cors } from "hono/cors";

const app = new Hono();

app.get('/', (c) => c.json({ success: true }));

app.fire();
