const { Given, When, Then } = require('cucumber');
const assert = require('assert');

Given('First step', async ()=> {
	console.log('this is the first step');
});

Given('Failed step', async ()=> {
	assert.fail();
});