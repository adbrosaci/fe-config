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
			rules: {
				...require('./rules/tailwind').rules,
			},
		},
		{
			files: [ '*.scss', '**/*.scss' ],
			plugins: [ 'stylelint-scss' ],
			rules: {
				...require('./rules/tailwind').sassRules,
			},
		},
	],
};
