import postcssHtml from 'postcss-html';
import coreRules from './rules/core.js';
import vueRules from './rules/vue.js';

/** @type {import('stylelint').Config} */
export default {
	plugins: [],
	rules: {
		...coreRules,
	},
	overrides: [
		{
			files: ['*.vue', '**/*.vue'],
			customSyntax: postcssHtml,
			rules: {
				...vueRules,
			},
		},
	],
};
