//Keep this file! It provides the `npm run cypress:open` command to scripts in the package.json file

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
