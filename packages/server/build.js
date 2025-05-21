import * as esbuild from 'esbuild';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist.js',
  sourcemap: (args['env'] || process.env['NODE_ENV']) !== 'production' ? 'inline' : false,
  format: 'esm',
  platform: 'node',
  target: 'node23',
  minify: (args['env'] || process.env['NODE_ENV']) === 'production',
  logLevel: 'info',
});

if (args['mode'] === 'watch') await ctx.watch();
else {
  await ctx.rebuild();
  await ctx.dispose();
}
