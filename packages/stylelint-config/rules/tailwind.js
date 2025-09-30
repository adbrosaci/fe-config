export default {
	'no-descending-specificity': null,

	'at-rule-no-unknown': [
		true,
		{
			ignoreAtRules: [
				'tailwind',
				'apply',
				'layer',
				'theme',
				'screen',
				'plugin',
				'reference',
			],
		},
	],
};
