import Koa from 'koa';
import pino from 'koa-pino-logger';
import router from './routes/index.js';

const app = new Koa();
app.use(pino());
app.use(router);

app.listen(process.env['PORT'] || 8080);
