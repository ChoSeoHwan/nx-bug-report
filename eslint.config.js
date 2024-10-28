import eslintJsPlugin from '@eslint/js';
import eslintJestPlugin from 'eslint-plugin-jest';
import eslintPrettierRecommendedPlugin from 'eslint-plugin-prettier/recommended';
import eslintSimpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import eslintYamlPlugin from 'eslint-plugin-yml';
import globals from 'globals';
import eslintJsonParser from 'jsonc-eslint-parser';
import eslintTypescriptPlugin from 'typescript-eslint';

// eslint basic config
const eslintConfigs = [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.nodeBuiltin }
        },
        rules: {
            eqeqeq: ['error', 'always'],
            'no-restricted-syntax': ['error', 'ExportDefaultDeclaration'],
            'no-restricted-exports': [
                'error',
                { restrictedNamedExports: ['default'] }
            ]
        }
    }
];

// prettier config
const prettierConfigs = [
    eslintPrettierRecommendedPlugin,
    { rules: { 'prettier/prettier': 'error' } }
];

// js config
const jsConfigs = [eslintJsPlugin.configs.recommended];

// typescript config
const typescriptAllowFiles = ['**/*.ts', '**/*.tsx'];
const typescriptRecommendedConfigs =
    eslintTypescriptPlugin.configs.recommended.map((config) => ({
        files: typescriptAllowFiles,
        ...config
    }));

const typescriptConfigs = [
    ...eslintTypescriptPlugin.config(...typescriptRecommendedConfigs),
    {
        files: typescriptAllowFiles,
        rules: {
            '@typescript-eslint/no-empty-interface': [
                'error',
                { allowSingleExtends: true }
            ],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error'
        }
    }
];

// simple import sort config
const simpleImportSortConfigs = [
    {
        plugins: {
            'simple-import-sort': eslintSimpleImportSortPlugin
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error'
        }
    }
];

// test file config
const testFiles = ['**/*.spec.ts', '**/*.spec.js', '**/__tests__/**/*.ts'];
const testConfigs = [
    {
        files: testFiles,
        ...eslintJestPlugin.configs['flat/recommended']
    },
    {
        files: testFiles,
        rules: {
            'jest/no-standalone-expect': [
                'error',
                {
                    additionalTestBlockFunctions: [
                        'given',
                        'when',
                        'then',
                        'and',
                        'but'
                    ]
                }
            ],
            'jest/prefer-importing-jest-globals': ['error'],
            'jest/expect-expect': [
                'error',
                { assertFunctionNames: ['expect', 'verify'] }
            ]
        }
    }
];

// json config
const jsonConfigs = [
    {
        files: ['**/*.json', '**/*.json5', '**/.lintstagedrc', '**/.swcrc'],
        languageOptions: { parser: eslintJsonParser },
        rules: { 'prettier/prettier': ['error', { tabWidth: 2 }] }
    }
];

// yaml config
const yamlConfigs = [
    ...eslintYamlPlugin.configs['flat/standard'],
    ...eslintYamlPlugin.configs['flat/prettier'],
    {
        files: ['**/*.yml', '**/*.yaml'],
        rules: {
            'prettier/prettier': ['error', { tabWidth: 2 }],
            'yml/no-empty-document': [0]
        }
    }
];

// eslint-disable-next-line no-restricted-syntax
export default [
    ...eslintConfigs,
    ...prettierConfigs,
    ...jsConfigs,
    ...typescriptConfigs,
    ...simpleImportSortConfigs,
    ...testConfigs,
    ...jsonConfigs,
    ...yamlConfigs
];
