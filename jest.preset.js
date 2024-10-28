// eslint-disable-next-line no-restricted-syntax
export default {
    transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },
    testEnvironment: 'node',
    rootDir: './',
    modulePaths: ['<rootDir>/src/'],
    reporters: ['default'],
    collectCoverage: false,
    testMatch: [
        '<rootDir>/__tests__/**/*.spec.[jt]s?(x)',
        '<rootDir>/src/**/*.spec.[jt]s?(x)'
    ],
    verbose: false
};
