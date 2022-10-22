/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		host: true,
	},
	base: '/quote-generator/',
})
