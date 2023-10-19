import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		animation: {
			fade: 'fadeIn 0.3s ease-in'
		},
		keyframes: (_obj) => ({
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '100' },
			}
		})
	},
	plugins: [],
};
export default config;
