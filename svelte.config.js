import { default as staticAdapter } from '@sveltejs/adapter-static';
import { default as autoAdapter } from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocess({ typescript: true, scss: true })],
	kit: {
		adapter: process.env.env === 'gh-pages' ? staticAdapter() : autoAdapter()
	},
	paths: {
		base: 'charlyflynn.github.io'
	}
};

export default config;
