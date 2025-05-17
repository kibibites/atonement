import type { Component } from 'solid-js';
import IconSparrow from '../assets/IconSparrow';

const SignIn: Component = () => (
  <div class="min-h-screen flex flex-col items-center justify-center">
    <header class="flex flex-col items-center gap-y-6">
      <IconSparrow class='w-24' />
      <h1 class="font-bold text-2xl">Welcome back!</h1>
    </header>
    <main class="my-8">
      <form class="border border-mono-1 rounded-lg p-6 bg-mono-0">
        <label for="email" class="font-semibold block">Email Address</label>
        <input id="email" type="email" placeholder="u@mail.me" class="block px-4 py-2 border border-mono-2 bg-mono--1 rounded-sm mt-1 w-full" />
        <label for="password" class="font-semibold mt-2 block">Password</label>
        <input id="password" type="password" class="block px-4 py-2 border border-mono-2 bg-mono--1 rounded-sm mt-1 w-full" />
        <button class="mt-4 cursor-pointer w-full px-6 py-2 border transition rounded-lg bg-cloud-2 border-cloud-3 text-white hover:brightness-110">Sign In</button>
        <button class="mt-4 cursor-pointer w-full px-6 py-2 border transition rounded-lg bg-mono-2 border-mono-3 text-white hover:brightness-110">Troubleshooting</button>
      </form>
      <aside class="mt-8 border border-mono-1 rounded-lg px-6 py-4 bg-mono-0 flex items-center justify-between">
        <span class="text-white">New to Sparrow?</span>
        <button class="px-4 py-1 border rounded-sm bg-mono-2 border-mono-3 text-white">sign up</button>
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
