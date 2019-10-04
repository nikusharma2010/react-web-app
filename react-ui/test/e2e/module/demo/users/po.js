const locator = require('./locator');

class UsersPage {

    constructor(page) {
        this.page = page;
    }

    async findFirstRow() {
        let result = await this.page.findElementByXPath(locator.firstRow);
        return await result.getText();
    }
    async findShortName() {
        let result = await this.page.findElementByXPath(locator.findShortName);
        return await result.getText();
    }
    async findName() {
        let result = await this.page.findElementByXPath(locator.findName);
        return await result.getText();
    }
    async findMobile() {
        let result = await this.page.findElementByXPath(locator.findMobile);
        return await result.getText();
    }
    async findEmail() {
        let result = await this.page.findElementByXPath(locator.findEmail);
        return await result.getText();
    }
    async findViewButton() {
        let result = await this.page.findElementByXPath(locator.findViewButton);
        return await result.getText();
    }
}

module.exports = { UsersPage };