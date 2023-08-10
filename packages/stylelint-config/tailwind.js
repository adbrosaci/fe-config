module.exports = {
	extends: [
		'@adbros/stylelint-config',
	],
	rules: {
		...require('./rules/tailwind').rules,
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			customSyntax: 'postcss-html',
			rules: {
				...require('./rules/tailwind').rules,
			},
		},
		{
			files: [ '*.scss', '**/*.scss' ],
			customSyntax: 'postcss-html',
			plugins: [ 'stylelint-scss' ],
			rules: {
				...require('./rules/tailwind').sassRules,
			},
		},
	],
};
