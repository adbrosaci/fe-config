import coreRules from './rules/core.js';
import stylisticRules from './rules/stylistic.js';
import orderRules from './rules/order.js';
import vueRules from './rules/vue.js';

/** @type {import('stylelint').Config} */
export default {
	plugins: [
		'@stylistic/stylelint-plugin',
		'stylelint-order',
	],
	rules: {
		...coreRules,
		...orderRules,
		...stylisticRules,
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
