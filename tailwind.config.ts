import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'codam-orange': '#FFA500',
				'codam-blue': '#1E90FF',
				'codam-purple': '#800080',
			}
		},
	},
	plugins: [require('@tailwindcss/typography')]
} as Config;
