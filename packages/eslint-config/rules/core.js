module.exports = {
	'for-direction': 'error',
	'getter-return': 'error',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'error',
	'no-constant-condition': 'error',
	'no-control-regex': 'error',
	'no-dupe-args': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-empty': 'error',
	'no-empty-character-class': 'error',
	'no-ex-assign': 'error',
	'no-extra-boolean-cast': 'error',
	'no-extra-semi': 'error',
	'no-func-assign': 'error',
	'no-inner-declarations': 'error',
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': 'error',
	'no-obj-calls': 'error',
	'no-regex-spaces': 'error',
	'no-sparse-arrays': 'error',
	'no-unexpected-multiline': 'error',
	'no-unreachable': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': 'error',
	'use-isnan': 'error',
	'valid-typeof': 'error',

	curly: [ 'error', 'all' ],
	'dot-notation': 'warn',
	'guard-for-in': 'error',
	'no-alert': 'warn',
	'no-caller': 'warn',
	'no-empty-function': 'error',
	'no-empty-pattern': 'error',
	'no-eq-null': 'off',
	'no-eval': 'error',
	'no-extra-bind': 'error',
	'no-fallthrough': 'error',
	'no-floating-decimal': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-iterator': 'error',
	'no-lone-blocks': 'error',
	'no-loop-func': 'warn',
	'no-multi-spaces': 'error',
	'no-new-func': 'error',
	'no-new-wrappers': 'error',
	'no-octal': 'error',
	'no-proto': 'error',
	'no-redeclare': [ 'warn', { builtinGlobals: true } ],
	'no-return-assign': [ 'error', 'always' ],
	'no-script-url': 'error',
	'no-self-assign': 'error',
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-labels': 'error',
	'no-useless-call': 'error',
	'no-useless-catch': 'error',
	'no-useless-concat': 'error',
	'no-void': 'error',
	'no-with': 'error',
	'wrap-iife': [ 'error', 'inside' ],
	yoda: 'error',

	'no-delete-var': 'error',
	'no-label-var': 'error',
	'no-shadow': 'warn',
	'no-shadow-restricted-names': 'error',
	'no-undef': 'error',
	'no-undef-init': 'error',
	'no-unused-vars': 'warn',

	'array-bracket-newline': [ 'error', 'consistent' ],
	'array-bracket-spacing': [ 'error', 'always' ],
	'array-element-newline': [ 'error', 'consistent' ],
	'block-spacing': [ 'error', 'always' ],
	'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
	camelcase: [ 'error', { properties: 'always' } ],
	'comma-dangle': [ 'error', 'always-multiline' ],
	'comma-spacing': [ 'error', { before: false, after: true } ],
	'comma-style': [ 'error', 'last' ],
	'eol-last': [ 'error', 'always' ],
	'func-call-spacing': [ 'error', 'never' ],
	'func-name-matching': [ 'error', 'always' ],
	'function-paren-newline': [ 'error', 'multiline' ],
	indent: [ 'error', 'tab' ],
	'key-spacing': [ 'error', { afterColon: true } ],
	'keyword-spacing': [ 'error', { before: true, after: true } ],
	'linebreak-style': [ 'warn', 'unix' ],
	'lines-around-comment': [ 'error', { beforeBlockComment: true, afterBlockComment: true } ],
	'lines-between-class-members': [ 'error', 'always' ],
	'max-statements-per-line': [ 'error', { max: 3 } ],
	'multiline-ternary': 'off',
	'new-cap': [ 'error', { newIsCap: true } ],
	'new-parens': 'error',
	'no-bitwise': 'error',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-mixed-spaces-and-tabs': 'error',
	'no-nested-ternary': 'error',
	'no-trailing-spaces': 'error',
	'no-unneeded-ternary': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': [ 'error', 'beside' ],
	'object-curly-newline': [ 'error', { consistent: true } ],
	'object-curly-spacing': [ 'error', 'always' ],
	'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
	'operator-linebreak': [ 'error', 'after', { overrides: { '?': 'before', ':': 'before' } } ],
	'quote-props': [ 'error', 'as-needed' ],
	quotes: [ 'error', 'single' ],
	semi: [ 'error', 'always' ],
	'semi-spacing': [ 'error', { before: false, after: true } ],
	'semi-style': [ 'error', 'last' ],
	'space-before-blocks': [ 'error', 'always' ],
	'space-before-function-paren': [ 'error', 'always' ],
	'space-in-parens': [ 'error', 'never' ],
	'space-infix-ops': 'error',
	'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
	'spaced-comment': [ 'error', 'always' ],
	'switch-colon-spacing': [ 'error', { after: true, before: false } ],
	'template-tag-spacing': [ 'error', 'always' ],

	'arrow-spacing': 'error',
	'constructor-super': 'error',
	'generator-star-spacing': 'error',
	'no-class-assign': 'error',
	'no-confusing-arrow': 'error',
	'no-const-assign': 'error',
	'no-dupe-class-members': 'error',
	'no-new-symbol': 'error',
	'no-this-before-super': 'error',
	'no-useless-computed-key': 'error',
	'symbol-description': 'error',
	'template-curly-spacing': [ 'error', 'always' ],
	'yield-star-spacing': [ 'error', 'both' ],

	'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
};