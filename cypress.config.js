const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  retries: 0,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: '86v6uw',

  e2e: {
    baseUrl: 'http://www.automationpractice.pl/index.php?',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});