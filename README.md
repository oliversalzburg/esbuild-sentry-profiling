# esbuild-sentry-profiling

```shell
# Build the variant that uses `.cjs` filenames.
node build-from-cjs.cjs

# Build the variant that uses `.mjs` filenames.
node build-from-esm.cjs
```

Note that the `dist-cjs` folder will contain a bunch of `.node` files, which are missing from the `dist-esm` folder.
