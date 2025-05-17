/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import { Router, Route } from "@solidjs/router";
import Home from './Home.tsx';
import RootLayout from './_layout.tsx';

const root = document.getElementById('root');

render(() => <Router root={RootLayout}>
  <Route path="/" component={Home} />
</Router>, root!);
