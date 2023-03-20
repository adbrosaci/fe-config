module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		parser: {
			js: 'espree',
			ts: '@typescript-eslint/parser',
		},
	},
	plugins: [ '@typescript-eslint' ],
	extends: [ 'plugin:vue/vue3-recommended' ],
	rules: {
		'vue/html-indent': [ 'error', 'tab' ],
		'vue/no-useless-v-bind': 'error',
		'vue/component-name-in-template-casing': [
			'error',
			'kebab-case',
			{
				registeredComponentsOnly: false,
				ignores: [],
			},
		],
		'vue/html-button-has-type': [
			'error',
			{
				button: true,
				submit: true,
				reset: true,
			},
		],
	},
};
