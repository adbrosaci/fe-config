import typescriptConfig from './typescript.js';
import vueRules from './rules/vue3.js';
import a11yRules from './rules/vue3-a11y.js';
import typescriptRules from './rules/typescript.js';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';
import vueA11yPlugin from 'eslint-plugin-vuejs-accessibility';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	...typescriptConfig,
	...vuePlugin.configs['flat/base'],
	{
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				ecmaVersion: 'latest',
				extraFileExtensions: [ '.vue' ],
				sourceType: 'module',
			},
		},
	},
	{
		files: [ '**/*.vue' ],
		plugins: {
			vue: vuePlugin,
			'vue-a11y': vueA11yPlugin,
		},
		languageOptions: {
			parser: vueParser,
		},
		rules: {
			...typescriptRules,
			...vueRules,
			...a11yRules,
		},
	},
	{
		files: [ '**/*.ts', '**/*.vue' ],
		...tseslint.configs.disableTypeChecked,
	},
	eslintConfigPrettier,
];
