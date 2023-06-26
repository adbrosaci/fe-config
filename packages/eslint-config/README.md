# ESLint config for Adbros projects

## Use one of these configs based on installed packages

`@adbros` (basic javascript)

`@adbros/eslint-config/typescript` (typescript projects)

`@adbros/eslint-config/vue3` (vanilla vue3 projects, assumes typescript)

`@adbros/eslint-config/nuxt3` (nuxt3 projects, assumes typescript, default in sandbox)

`@adbros/eslint-config/node` (nodejs projects)

### Example .eslintrc.js

```js
module.exports = {
	extends: [
		'@adbros/eslint-config/nuxt3',
	],
};
```