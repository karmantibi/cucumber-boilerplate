Beginner boilerplate to API and E2E tests with cucumber.

 - For http requests I use [Axios](https://www.npmjs.com/package/axios)
 - For UI tests I use [Puppeteer](https://www.npmjs.com/package/puppeteer)

 Contains:
  - API test example
  - E2E test example
  - beforeall hook (hooks.js)
  - pretty-formatter to display test running prettier (package.json)
  - html report from test running (reports/cucumber_report.html)
  - Example for javascript page object model

 - Run Full E2E set
  ```
  npm run test:e2e
  ```

 - Run Full API set
  ```
  npm run test:api
  ```

 - Run custom tagged API test(s)
  ```
  npm run test:api -- -t @custom-tag
  ```

 - Run custom tagged E2E test(s)
  ```
  npm run test:e2e -- -t @custom-tag
  ```