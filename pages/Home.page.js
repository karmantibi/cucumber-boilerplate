const  { BasePage } = require('./BasePage');

const { getPage } = require('../helpers/puppeteer_helper');

const SEARCH_INPUT_SELECTOR = '#search_query_top';
const SEARCH_BUTTON_SELECTOR = '[name="submit_search"]';
const ALERT_WARNING_BOX_SELECTOR = '[class="alert alert-warning"]';

class HomePage extends BasePage {

    async open(url) {
        await getPage().goto(url);
    }

    async fillSearchInput(value) {
        await getPage().waitForSelector(SEARCH_INPUT_SELECTOR);
        await getPage().focus(SEARCH_INPUT_SELECTOR);
        await getPage().keyboard.type(value);
    }

    async clickOnSearchButton() {
        await getPage().waitForSelector(SEARCH_BUTTON_SELECTOR);
        await getPage().click(SEARCH_BUTTON_SELECTOR);
    }
    
    async getAlertWarningBoxText() {
        await getPage().waitForSelector(ALERT_WARNING_BOX_SELECTOR);
        const element = await getPage().$(ALERT_WARNING_BOX_SELECTOR);
        const text = await (await element.getProperty('textContent')).jsonValue();
        return text.trim();
    }

}

exports.HomePage = new HomePage();