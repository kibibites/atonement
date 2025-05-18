import { createSignal, type Component } from 'solid-js';
import IconSparrow from '../assets/IconSparrow';
import Button from '../components/Button';
import { IconChecks, IconKeyFilled, IconMailFilled } from '@tabler/icons-solidjs';

const Step1Form: Component<{ step: number; }> = (props) => (
  <div class={props.step !== 1 ? 'hidden' : ''}>
    <p class="text-sm text-white">Welcome, we need your email address to send you a verification code so we can proceed with your account creation.</p>
    <label for="email" class="font-semibold block mt-2">Email Address</label>
    <input id="email" type="email" placeholder="u@mail.me" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
    <label for="invite" class="font-semibold block mt-2">Invite Code</label>
    <input id="invite" placeholder="012-345-xxxx" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
    <Button role='primary' class="mt-4 w-full">Continue</Button>
  </div>
);

const Step2Form: Component<{ step: number; }> = (props) => (
  <div class={props.step !== 2 ? 'hidden' : ''}>
    <p class="text-sm text-white">Your account must be secured with a minimum 8-character long password. Your password is secured and encrypted and you should not share it without exceptions.</p>
    <label for="password" class="font-semibold block mt-2">Password</label>
    <input id="password" type="password" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
    <label for="password-confirm" class="font-semibold block mt-2">Confirm Password</label>
    <input id="password-confirm" type="password" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
    <Button role='primary' class="mt-4 w-full">Submit</Button>
    <Button class="mt-4 w-full">Go back</Button>
  </div>
);

const Step3Form: Component<{ step: number; }> = (props) => (
  <div class={props.step !== 3 ? 'hidden' : ''}>
    <p class="text-sm text-white">
      We've send you a confirmation email. Please check your inbox, the confirmation link might expire soon!
    </p>
    <p class="text-sm text-white mt-[1ch]">
      If you didn't get the confirmation email after a while we can try re-sending it.
    </p>
  </div>
);

const SignUp: Component = () => {
  const [step, setStep] = createSignal(3);

  return (
    <div class="min-h-screen flex flex-col items-center justify-center">
      <header class="flex flex-col items-center gap-y-6">
        {step() === 1 && <IconSparrow class='w-24' />}
        {step() === 2 && <IconKeyFilled class='w-14 h-14 text-mono-5' />}
        {step() === 3 && <IconMailFilled class='w-14 h-14 text-mono-5' />}
        <h1 class="font-bold text-2xl">
          {step() === 1 && 'Welcome to Sparrow!'}
          {step() === 2 && 'Set your password!'}
          {step() === 3 && 'Check your inbox!'}
        </h1>
      </header>
      <main class="my-10 max-w-sm w-full">
        <form class="border border-mono-2 rounded-lg p-6 bg-mono-1 glow">
          <Step1Form step={step()} />
          <Step2Form step={step()} />
          <Step3Form step={step()} />
        </form>
        {step() === 1 &&
          <aside class="mt-8 border border-mono-2 rounded-lg px-6 py-4 bg-mono-1 flex items-center justify-between">
            <span class="flex items-center gap-x-4"><IconChecks class="text-safety-green" /><span>Have an account?</span></span>
            <Button role="primary">Sign In</Button>
          </aside>
        }
      </main>
      <footer>
        <nav>
          <ul class="flex items-center gap-x-4 justify-center">
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Status</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default SignUp;
