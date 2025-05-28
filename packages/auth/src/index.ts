import { connect } from 'nats';
import { type CloudEventV1 } from 'cloudevents';
import eventHandlers from './events/index.js';

import 'dotenv/config'

const nc = await connect({ servers: process.env['NATS_URL']! })
const js = nc.jetstream();
const jsm = await nc.jetstreamManager();

const handleEvent = (ev: CloudEventV1<unknown>) => {
  const handler = eventHandlers[ev.type];
  if (!handler) return;
  handler(ev);
};
