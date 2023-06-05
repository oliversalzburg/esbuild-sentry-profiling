require("esbuild").build({
	entryPoints: ["./src/main-esm.mjs"],
	outfile: "./dist-esm/index.cjs",
	platform: "node",
	format: "cjs",
	bundle: true,
	minify: false,
	sourcemap: true,
	loader: {
		'.node': 'copy',
	},
});
