import compose from 'koa-compose';

import auth from './auth.js';
import root from './root.js';

const router = compose([
  auth,
  root
].flatMap((r) => [r.routes(), r.allowedMethods()]));

export default router;
