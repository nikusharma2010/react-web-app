module.exports = {
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    coveragePathIgnorePatterns: [
        'src/index.js',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/test/e2e',
    ],
    collectCoverage: true,
    coverageReporters: [
        'json',
        'text',
        'html'
    ]
};