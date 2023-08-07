const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./cypress/reports/jsonlogs", // ** Path of .json file **//
  reportPath: "./cypress/reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
