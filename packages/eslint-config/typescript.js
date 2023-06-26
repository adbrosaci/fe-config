require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	overrides: [
		{
			files: [ '*.ts', '*.tsx' ],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
				parser: '@typescript-eslint/parser',
			},
		},
	],
	extends: [
		'@adbros/eslint-config',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		...require('./rules/typescript'),
	},
};
