import type { EventHandler } from '.';

interface SignupEventBody {
}

export default {
  type: 'icu.sparrow.signup',
  handler: (ev) => {
    console.log(ev);
  }
} satisfies EventHandler<SignupEventBody>;
