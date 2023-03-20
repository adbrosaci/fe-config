module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	plugins: [ '@typescript-eslint' ],
	extends: [
		'plugin:@adbros/core',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/func-call-spacing': 'error',
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
		'@typescript-eslint/space-before-function-paren': 'error',
	},
};
