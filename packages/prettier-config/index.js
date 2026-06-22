/**
 * @type {import('prettier').Config}
 */
const config = {
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	trailingComma: "all",
	tabWidth: 2,
	plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss", "prettier-plugin-css-order"],
	useTabs: true,
	endOfLine: "lf",
	overrides: [
		{
			files: ["*.json", "*.yml", "*.yaml"],
			options: {
				useTabs: false,
			},
		},
	],
};

export default config;
