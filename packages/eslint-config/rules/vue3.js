module.exports = {
	'vue/html-indent': [ 'error', 'tab' ],
	'vue/no-useless-v-bind': 'error',
	'vue/component-name-in-template-casing': [ 'error', 'kebab-case', {
		registeredComponentsOnly: false,
		ignores: [],
	} ],
	'vue/html-button-has-type': [ 'error', {
		button: true,
		submit: true,
		reset: true,
	} ],
	'vue/multi-word-component-names': [ 'off' ],
};
