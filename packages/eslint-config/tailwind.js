import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import tailwindRules from './rules/tailwind.js';

export default [
	{
		plugins: {
			'better-tailwindcss': betterTailwindcss,
		},
		rules: {
			...tailwindRules,
		},
	},
];
