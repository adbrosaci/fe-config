/**
 * @type {import('prettier').Config}
 */
const config = {
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	trailingComma: "all",
	tabWidth: 2,
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-css-order"],
};

export default config;
