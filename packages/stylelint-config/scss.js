module.exports = {
	extends: [
		'@adbros/stylelint-config',
	],
	customSyntax: 'postcss-scss',
	plugins: [
		'stylelint-scss',
	],
	rules: {
		...require('./rules/scss'),
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
