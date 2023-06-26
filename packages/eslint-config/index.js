require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		parser: 'espree',
	},
	rules: {
		...require('./rules/core'),
	},
};
