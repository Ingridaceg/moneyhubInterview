const testPathIgnorePatterns = [
  "/node_modules/",
  "<rootDir>/dist",
  "<rootDir>/types",
  "<rootDir>/scripts",
].filter(path => !!path)

module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/modules/*.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 85,
      lines: 85,
    },
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns,
  watchPathIgnorePatterns: [".js$"],
  coverageReporters: ["json", "lcov", "text", "clover"],
}
