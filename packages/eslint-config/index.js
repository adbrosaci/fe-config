import globals from 'globals';
import coreRules from './rules/core.js';
import unicornRules from './rules/unicorn.js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import gitignore from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
	gitignore({
		strict: false,
	}),
	{
		languageOptions: {
			globals: globals.browser,
			sourceType: 'module',
		},
		plugins: {
			unicorn: pluginUnicorn,
		},
		rules: {
			...coreRules,
			...unicornRules,
		},
	},
	eslintConfigPrettier,
];
