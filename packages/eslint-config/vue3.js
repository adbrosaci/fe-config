require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	overrides: [
		{
			files: [ '*.vue' ],
			parser: 'vue-eslint-parser',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
				parser: {
					js: 'espree',
					ts: '@typescript-eslint/parser',
				},
			},
		},
	],
	extends: [
		'@adbros/eslint-config/typescript',
		'plugin:vue/vue3-recommended',
	],
	rules: {
		...require('./rules/vue3'),
	},
};
