const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
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
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
