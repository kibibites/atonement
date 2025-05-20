import Koa from 'koa';
import pino from 'koa-pino-logger';

const app = new Koa();
app.use(pino());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
