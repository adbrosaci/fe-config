module.exports = {
	extends: [
		'stylelint-config-hudochenkov/order',
		'stylelint-config-html',
	],
	plugins: [
		'stylelint-stylistic',
	],
	rules: {
		...require('./rules/core'),
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			customSyntax: 'postcss-html',
			rules: {
				...require('./rules/vue'),
			},
		},
	],
};
