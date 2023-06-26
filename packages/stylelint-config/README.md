# Stylelint config for Adbros projects

## Use one of these configs based on installed packages

`@adbros/stylelint-config` (pure css)

`@adbros/stylelint-config/tailwind` (css & tailwind rules, default in sandbox)

`@adbros/stylelint-config/scss` (scss rules)

### Example .stylelintrc.js

```js
module.exports = {
	extends: [
		'@adbros/stylelint-config/tailwind',
	],
};
```