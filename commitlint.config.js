// eslint-disable-next-line no-restricted-syntax
export default {
    extends: [
        '@commitlint/config-conventional',
        '@commitlint/config-nx-scopes'
    ],
    rules: {
        'subject-case': [0],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'chore',
                'revert',
                'build',
                'refactor',
                'perf',
                'style',
                'ci',
                'docs',
                'test',
                'merge',
                'release'
            ]
        ]
    }
};
