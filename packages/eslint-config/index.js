import globals from 'globals';
import coreRules from './rules/core.js';
import unicornRules from './rules/unicorn.js';
import stylisticRules from './rules/stylistic.js';

import pluginStylistic from '@stylistic/eslint-plugin';
import pluginUnicorn from 'eslint-plugin-unicorn';

export default [
	{
		languageOptions: {
			globals: globals.browser,
			sourceType: 'module',
		},
		plugins: {
			unicorn: pluginUnicorn,
			'@stylistic': pluginStylistic,
		},
		rules: {
			...coreRules,
			...unicornRules,
			...stylisticRules,
		},
	},
];
