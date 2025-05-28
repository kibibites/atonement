import type { EventHandler } from './index.js';

interface SignupEventBody {
}

export default {
  type: 'icu.sparrow.signup',
  handler: (ev) => {
    console.log(ev);
  }
} satisfies EventHandler<SignupEventBody>;
