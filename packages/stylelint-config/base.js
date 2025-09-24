import coreRules from './rules/core.js';
import vueRules from './rules/vue.js';

/** @type {import('stylelint').Config} */
export default {
	plugins: [
	],
	rules: {
		...coreRules,
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			customSyntax: 'postcss-html',
			rules: {
				...vueRules,
			},
		},
	],
};
