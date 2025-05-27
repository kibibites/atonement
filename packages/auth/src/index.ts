import { HTTP, type CloudEventV1 } from 'cloudevents';
import { Hono } from 'hono';
import eventHandlers from './events/index.js';

const app = new Hono<{ Bindings: Env; }>();

app.get('/', (c) => c.json({ success: true }));
app.post("/", async (c) => {
  const body = await c.req.json();
  const headers = c.req.header();

  const ev = HTTP.toEvent({ body, headers });
  if (Array.isArray(ev)) return ev.forEach(handleEvent);
  return handleEvent(ev);
});

const handleEvent = (ev: CloudEventV1<unknown>) => {
  const handler = eventHandlers[ev.type];
  if (!handler) return;
  handler(ev);
};

export default app;
