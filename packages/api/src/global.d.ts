export { };

declare global {
  interface WinterProcess {
    env: Record<string, unknown>;
    version: `WinterJS ${string}`;
  }

  const process: WinterProcess;
}
