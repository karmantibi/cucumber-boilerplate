const fs = require('fs-extra');
const reporter = require('cucumber-html-reporter');

const generateReports = function() {
  const jsonReportPath = 'reports/e2e/cucumber_report.json';
  const htmlReportPath = 'reports/e2e/cucumber_report.html';
  const screenshotsPath = 'reports/e2e/screenshots/';
  
  let report = fs.readJsonSync(jsonReportPath);
  fs.writeJsonSync(jsonReportPath, report, { spaces: 2 });

  const options = {
    theme: 'bootstrap',
    jsonFile: jsonReportPath,
    output: htmlReportPath,
    reportSuiteAsScenarios: true,
    launchReport: process.env.npm_package_config_launchReport == 'true',
    storeScreenshots: true,
    screenshotsDirectory: screenshotsPath,
    metadata: {
      'App Version': process.env.npm_package_version,
      'Test Environment': 'STAGING',
      'Browser': 'Chrome  56.0.2840.98',
      'Platform': process.platform,
      'Parallel': 'Scenarios',
      'Executed': 'Remote',
    },
  };
  reporter.generate(options);
};

module.exports = generateReports;