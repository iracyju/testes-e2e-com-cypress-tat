import { defineConfig } from 'cypress';
import registerCypressGrep from '@cypress/grep/src/plugin.js'; // note o `.js` no final se necessário

export default defineConfig({
  projectId: "r4v63f",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      registerCypressGrep(config);
      return config;
    },
    baseUrl: "https://notes-serverless-app.com",
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
});

