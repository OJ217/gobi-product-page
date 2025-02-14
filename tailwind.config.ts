import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'warm-tone-2': 'var(--warm-tone-2)',
				'warm-tone-3': 'var(--warm-tone-3)',
				'warm-tone-4': 'var(--warm-tone-4)',
				graphite: 'var(--graphite)',
				subdued: 'var(--subdued)',
				light: 'var(--light)',
				lime: 'var(--lime)',
			},
		},
	},
	plugins: [],
} satisfies Config;
