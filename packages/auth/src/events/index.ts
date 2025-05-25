import type { CloudEventV1 } from 'cloudevents';

import signup from './signup';

interface EventHandler<T> {
  type: string;
  handler: (ev: CloudEventV1<T>) => unknown;
}

const eventHandlers = [signup].reduce((p, c) => {
  p[c.type] = c.handler;
  return p;
}, {} as Record<string, EventHandler<any>['handler']>);

export default eventHandlers;

export {
  type EventHandler,
};
