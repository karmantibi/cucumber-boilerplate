const { BeforeAll, AfterAll, Before, After } = require('cucumber');
const puppeteer = require('puppeteer');
const { setPage } = require('../helpers/puppeteer_helper');
const { MEDIUM_TIMEOUT } = require('../helpers/timeout_helper');

let browser = null;
let page = null;

BeforeAll({ timeout: MEDIUM_TIMEOUT }, async () => {
	console.log('Before all hook!');
});

Before({ tags: "@e2e", timeout: MEDIUM_TIMEOUT }, async () => {
	if (browser === null) {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 100
		});
		page = await browser.newPage();
		setPage(page); 
	}
});

AfterAll(async () => {
	if (browser !== null) {
		await browser.close();
	}
});