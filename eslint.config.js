import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    // add more generic rule sets here, such as:
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginSvelte.configs['flat/recommended'],
    {
        rules: {
            // override/add rules settings here, such as:
            // 'svelte/rule-name': 'error'
        },
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".svelte"]
            }
        }
    }
];