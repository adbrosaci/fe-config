require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	extends: [
		'@adbros/eslint-config/typescript',
	],
	rules: {
		...require('./rules/node'),
	},
};
