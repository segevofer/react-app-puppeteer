module.exports = {
  globalSetup: require.resolve("jest-environment-puppeteer/setup"),
  globalTeardown: require.resolve("jest-environment-puppeteer/teardown"),
  testEnvironment: require.resolve("jest-environment-puppeteer"),
  setupFilesAfterEnv: [require.resolve("expect-puppeteer")],

  globals: {
    URL: "http://localhost:3000",
  },
  testMatch: ["**/src/e2e/*.e2e.js"],
  transform: {
    "\\.js$": "react-scripts/config/jest/babelTransform",
  },
  verbose: true,
};
