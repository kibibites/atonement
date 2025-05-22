import { createAuthClient } from "better-auth/solid";

const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_AUTH_URL
});

export default authClient;
