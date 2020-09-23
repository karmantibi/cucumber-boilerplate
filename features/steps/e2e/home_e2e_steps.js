const { Given, When, Then } = require('cucumber');
const assert = require('assert');

const { HomePage } = require('../../../pages/Home.page');

const { MEDIUM_TIMEOUT, LARGE_TIMEOUT } = require('../../../helpers/timeout_helper');

Given('I open {string} in a new page', { timeout: LARGE_TIMEOUT }, async (url) => {
    await HomePage.open(url);
});

When('I fill searchbar with: {string} on Home Page', { timeout: MEDIUM_TIMEOUT }, async (text) => {
    await HomePage.fillSearchInput(text);
});

When('I click on search button on Home Page', { timeout: MEDIUM_TIMEOUT }, async () => {
    await HomePage.clickOnSearchButton();
});

Then('the warning box message is the following: {string} on Home Page', async (expectedText) => {
    const actualText = await HomePage.getAlertWarningBoxText();
    assert.ok(actualText.includes(expectedText), `The warning text box should be: '${expectedText}', but found: '${actualText}'`);
});