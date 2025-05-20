import * as esbuild from 'esbuild';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  sourcemap: args['env'] !== 'production',
  format: 'esm',
  minify: args['env'] === 'production',
  logLevel: 'info',
});

if (args['mode'] === 'watch') await ctx.watch();
else {
  await ctx.rebuild();
  await ctx.dispose();
}
