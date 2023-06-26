require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	overrides: [
		{
			files: [ '**/server/**/*.{js,ts,jsx,tsx}' ],
			extends: [
				'@adbros/eslint-config/node',
			],
		},
	],
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'@adbros/eslint-config/vue3',
	],
	rules: {
		...require('./rules/nuxt3'),
	},
};
