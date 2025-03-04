import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

export default defineConfig({
	build: {
		minify: false,
		outDir: 'lib',
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime', 'react-dom'],
			input: Object.fromEntries(
				glob.sync('src/**/*.{ts,tsx}', {
					ignore: ['src/**/*.d.ts']
				}).map(file => [
					// The name of the entry point
					// src/nested/foo.ts becomes nested/foo
					relative('src', file.slice(0, file.length - extname(file).length)),
					// The absolute path to the entry file
					// src/nested/foo.ts becomes /project/src/nested/foo.ts
					fileURLToPath(new URL(file, import.meta.url))
				])
			),
			output: {
				// dir: 'lib',
				// treeshake: false,
				// format: 'es',
				// preserveModules: true,
				// inlineDynamicImports: false,
				// preserveModulesRoot: 'src',
				// globals: {
				// 	react: 'React',
				// 	'react-dom': 'ReactDOM',
				// },
				// chunkFileNames: '[name].js',
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js'
			}
		}
	},
	plugins: [
		react(),
		libInjectCss(),
		dts({
			tsconfigPath: resolve(__dirname, 'tsconfig.app.json')
		})
	]
});
