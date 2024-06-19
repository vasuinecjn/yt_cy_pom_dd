const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/*.cy.js',
  },
  env: {
    data: require("./cypress/fixtures/data.json")
  },
});
