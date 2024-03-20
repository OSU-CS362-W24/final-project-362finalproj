const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080/",
    video: true,
    videoUploadOnPasses: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});
