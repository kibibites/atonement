import Router from '@koa/router';

const router = new Router({});

router.get('/', async (ctx) => {
  ctx.set('content-type', 'application/json');
  ctx.body = JSON.stringify({
    success: true
  });
});

export default router;
