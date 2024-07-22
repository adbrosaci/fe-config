# ESLint configs for Adbros projects

## Available configs

- Base
- TypeScript (extends Base)
- Vue3 (extends TypeScript)
- Tailwind

## Example `eslint.config.js`

```javascript
import vue3 from '@adbros/eslint-config/vue3.js';
import tailwind from '@adbros/eslint-config/tailwind.js';

export default [
	...vue3,
	...tailwind,
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
```