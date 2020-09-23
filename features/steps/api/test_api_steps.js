const { Given, When, Then } = require('cucumber');
const { get, responseList } = require('../../../helpers/request_helper');
const { MEDIUM_TIMEOUT } = require('../../../helpers/timeout_helper');
const assert = require('assert');

When('send a GET request to {string}', { timeout: MEDIUM_TIMEOUT }, async (url)=> {
	await get(url);
}); 

Then('the last item of response list should contains {int} item', (expectedNumber) => {
	const actualNumber = responseList[responseList.length - 1].data.data.length;
	assert.strictEqual(actualNumber, expectedNumber, `item number should be: ${expectedNumber}, but found: ${actualNumber}`);
});
