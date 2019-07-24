const CucumberCli = require('cucumber').Cli;
const generateReports = require('./testReporter.js');

let exitCode = 10;

(async function() {
  const cli = new CucumberCli({
    argv: [
      ...process.argv,
    ],
    cwd: process.cwd(),
    stdout: process.stdout,
  });

  try {
    const result = await cli.run();
    generateReports();
    exitCode = result.success ? 0 : 1;
    if (process.stdout.write('')) {
      exitCode = 0;
    } else {
      process.stdout.on('drain', exitNow);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();

process.on('exit', () => {
  process.exit(exitCode);
});