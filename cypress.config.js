import { defineConfig } from 'cypress';

export default defineConfig({
   projectId: "r4v63f",
   chromeWebSecurity: false,
  e2e: {
   
     baseUrl: "https://notes-serverless-app.com",
     env: {
  viewportWidthBreakpoint: 768,
},
    
  }
});

