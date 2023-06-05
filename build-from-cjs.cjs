require("esbuild").build({
	entryPoints: ["./src/main-cjs.cjs"],
	outfile: "./dist-cjs/index.cjs",
	platform: "node",
	format: "cjs",
	bundle: true,
	minify: false,
	sourcemap: true,
	loader: {
		'.node': 'copy',
	},
});
