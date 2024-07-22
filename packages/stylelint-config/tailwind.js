import tailwindRules from './rules/tailwind.js';

export default {
	extends: [
		'./index',
	],
	rules: {
		...tailwindRules,
	},
	overrides: [
		{
			files: [ '**/*.vue' ],
			rules: {
				...tailwindRules,
			},
		},
	],
};
