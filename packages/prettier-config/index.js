/**
 * @type {import('prettier').Config}
 */
const config = {
	semi: true,
	singleQuote: true,
	useTabs: true,
	quoteProps: "as-needed",
	trailingComma: 'all',
	tabWidth: 2,
	plugins: [ 'prettier-plugin-tailwindcss' ],
};

export default config;
