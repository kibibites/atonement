/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import { Router, Route } from "@solidjs/router";
import Home from './Home.tsx';
import RootLayout from './_layout.tsx';
import SignIn from './auth/SignIn.tsx';
import SignUp from './auth/SignUp.tsx';

const root = document.getElementById('root');

render(() => <Router root={RootLayout}>
  <Route path="/" component={Home} />
  <Route path="/signin" component={SignIn} />
  <Route path="/signup" component={SignUp} />
</Router>, root!);
