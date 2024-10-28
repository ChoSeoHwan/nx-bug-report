import baseConfigs from '../../../eslint.config.js';

// eslint-disable-next-line no-restricted-syntax
export default [
    ...baseConfigs,
    {
        ignores: [
            // eslint ignore files (DO_NOT_REMOVE:ESLINT_IGNORE)
            'build',
            'dist'
        ]
    }
];
