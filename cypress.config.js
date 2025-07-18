import { defineConfig } from 'cypress';

export default defineConfig({
   chromeWebSecurity: false,
  e2e: {
   
     baseUrl: "https://notes-serverless-app.com",
     env: {
  viewportWidthBreakpoint: 768,
},

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});

