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
			files: [ '*.vue', '**/*.vue' ],
			rules: {
				...tailwindRules,
			},
		},
	],
};
