import coreConfig from './index.js';
import tseslint from 'typescript-eslint';
import typescriptRules from './rules/typescript.js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	...coreConfig,
	...tseslint.configs.recommendedTypeChecked,
	{
		files: [ '**/*.ts', '**/*.vue' ],
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
				extraFileExtensions: [ '.vue' ],
			},
		},
		rules: {
			...typescriptRules,
		},
	},
	{
		files: [ '**/*.js' ],
		...tseslint.configs.disableTypeChecked,
	},
	eslintConfigPrettier,
);
