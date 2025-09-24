# @adbros/prettier-config

Shared Prettier configuration for Adbros projects.

## Install

```bash
npm i -D @adbros/prettier-config
```

Requires `prettier@>=3` as a peer dependency.

## Usage

Add to your `package.json`:

```json
{
  "prettier": "@adbros/prettier-config"
}
```

Or in `.prettierrc.mjs` if you need to extend:

```js
import base from '@adbros/prettier-config';

/** @type {import('prettier').Config} */
export default {
	...base,
	// overrides here
};
```

Based on Prettier shareable configs guidance. See docs: https://prettier.io/docs/sharing-configurations/
