import coreRules from './rules/core.js';
import stylisticRules from './rules/stylistic.js';
import orderRules from './rules/order.js';
import vueRules from './rules/vue.js';

export default {
	extends: [
		'stylelint-config-hudochenkov/order',
		'stylelint-config-html',
	],
	plugins: [
		'@stylistic/stylelint-plugin',
	],
	rules: {
		...coreRules,
		...orderRules,
		...stylisticRules,
	},
	overrides: [
		{
			files: [ '*.vue', '**/*.vue' ],
			rules: {
				...vueRules,
			},
		},
	],
};
