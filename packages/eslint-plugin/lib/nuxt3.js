module.exports = {
	extends: [
		'plugin:@adbros/vue3',
		'@nuxtjs/eslint-config-typescript',
	],
	rules: {
		'vue/no-multiple-template-root': 'error',
	},
};
