import { IconUserCog } from '@tabler/icons-solidjs';
import type { Component } from 'solid-js';
import Button from '../components/Button';

const Onboarding: Component = () => (
  <div class="min-h-screen flex flex-col items-center justify-center">
    <header class="flex flex-col items-center gap-y-6">
      <IconUserCog class='w-14 h-14 text-mono-5' />
      <h1 class="font-bold text-2xl">Nice to meet ya!</h1>
    </header>
    <main class="my-10 max-w-sm w-full">
      <form class="border border-mono-2 rounded-lg p-6 bg-mono-1 glow">
        <p class="text-white text-sm">
          You have confirmed your email for your new Sparrow account, congratulations! Let's setup your profile, just the basics.
        </p>
        <label for="username" class="font-semibold block mt-4">Username</label>
        <input id="username" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
        <label for="dob" class="font-semibold mt-2 block">Date of Birth</label>
        <input id="dob" type="date" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
        <Button role='primary' class="mt-4 w-full">Submit</Button>
      </form>
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

export default Onboarding;
