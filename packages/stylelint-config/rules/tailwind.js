const rules = {
	'declaration-block-trailing-semicolon': null,
	'no-descending-specificity': null,

	'at-rule-no-unknown': [
		true,
		{
			ignoreAtRules: [
				'tailwind',
				'apply',
				'layer',
				'config',
				'variants',
				'responsive',
				'screen',
			],
		},
	],
};

const sassRules = {
	'scss/operator-no-unspaced': null,
	'scss/at-rule-no-unknown': [
		true,
		{
			ignoreAtRules: [
				'tailwind',
				'apply',
				'layer',
				'config',
				'variants',
				'responsive',
				'screen',
			],
		},
	],
};

module.exports = { rules, sassRules };
