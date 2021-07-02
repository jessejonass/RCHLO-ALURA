module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.js",
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.jsx",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageReporters: ["lcov", "json"],
}
