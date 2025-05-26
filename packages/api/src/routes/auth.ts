import Router from '@koa/router';

const router = new Router({ prefix: '/auth' });

router.get('/signup', async (ctx) => {
  ctx.body = '!!';
});

export default router;
