const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js"],
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://swapi.info",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 6000,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 15,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    projectId: "yuf1hb",
    env: {
      apiServer: "https://swapi.info/api",
      stageUser: "admin_test",
      stagePassword: "SecretPassword123"
    }
  },
});
