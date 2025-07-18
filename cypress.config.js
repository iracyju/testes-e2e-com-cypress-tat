import { defineConfig } from 'cypress';

export default defineConfig({
   projectId: "r4v63f",
   chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
  require('@cypress/grep/src/plugin')(config)
  return config
},
   
     baseUrl: "https://notes-serverless-app.com",
     env: {
  viewportWidthBreakpoint: 768,
},
    
  }
});

