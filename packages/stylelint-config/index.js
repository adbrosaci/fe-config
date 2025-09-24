import base from './base.js';

/** @type {import('stylelint').Config} */
export default {
	extends: [
		base,
		'stylelint-config-prettier',
	],
};
