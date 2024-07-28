import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://testnet.binancefuture.com/",
    viewportHeight: 900,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
      const options = {
        typescript: require.resolve('typescript'),
      };
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber(options));
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
