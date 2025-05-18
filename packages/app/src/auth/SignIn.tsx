import type { Component } from 'solid-js';
import IconSparrow from '../assets/IconSparrow';
import Button from '../components/Button';
import { IconSparkles } from '@tabler/icons-solidjs';

const SignIn: Component = () => (
  <div class="min-h-screen flex flex-col items-center justify-center">
    <header class="flex flex-col items-center gap-y-6">
      <IconSparrow class='w-24' />
      <h1 class="font-bold text-2xl">Welcome back!</h1>
    </header>
    <main class="my-10 max-w-sm w-full">
      <form class="border border-mono-2 rounded-lg p-6 bg-mono-1 glow">
        <label for="email" class="font-semibold block">Email Address</label>
        <input id="email" type="email" placeholder="u@mail.me" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
        <label for="password" class="font-semibold mt-2 block">Password</label>
        <input id="password" type="password" class="block outline-none transition-colors focus:border-cloud-3 px-4 py-2 border border-mono-2 bg-mono-0 rounded-sm mt-1 w-full" />
        <Button role='primary' class="mt-4 w-full">Sign In</Button>
        <Button class="mt-4 w-full">Troubleshooting</Button>
      </form>
      <aside class="mt-8 border border-mono-1 rounded-lg px-6 py-4 bg-mono-0 flex items-center justify-between">
        <span class="flex items-center gap-x-4"><IconSparkles class="text-[#ff5caa]" /><span>New to Sparrow?</span></span>
        <Button>Sign Up</Button>
      </aside>
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

export default SignIn;
