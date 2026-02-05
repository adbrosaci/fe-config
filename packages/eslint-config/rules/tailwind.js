export default {
	// Stylistic (class order + whitespace disabled – handled by Prettier)
	'better-tailwindcss/enforce-consistent-line-wrapping': ['error', {
		indent: 'tab',
		strictness: 'loose',
	}],
	'better-tailwindcss/enforce-consistent-class-order': 'off',
	'better-tailwindcss/enforce-consistent-variable-syntax': 'off',
	'better-tailwindcss/enforce-consistent-important-position': 'off',
	'better-tailwindcss/enforce-shorthand-classes': 'error',
	'better-tailwindcss/enforce-canonical-classes': 'error',
	'better-tailwindcss/no-duplicate-classes': 'error',
	'better-tailwindcss/no-deprecated-classes': 'off',
	'better-tailwindcss/no-unnecessary-whitespace': 'off',
	// Correctness
	'better-tailwindcss/no-unknown-classes': 'off',
	'better-tailwindcss/no-conflicting-classes': 'off',
	'better-tailwindcss/no-restricted-classes': 'off',
};
