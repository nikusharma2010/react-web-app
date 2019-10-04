const locator = require('./locator');

class AddUserPage {

    constructor(page) {
        this.page = page;
    }

    async addUserScreenHeader() {
        let result = await this.page.findElementByXPath(locator.addUserScreenHeader);
        return await result.getText();
    }
    async addUserEmployeeNoLabel() {
        let result = await this.page.findElementByXPath(locator.addUserEmployeeNoLabel);
        return await result.getText();
    }
    async addUserEmployeeNoInput() {
        return await this.page.findElementByXPath(locator.addUserEmployeeNoInput);
    }
    async addUserFirstNameLabel() {
        let result = await this.page.findElementByXPath(locator.addUserFirstNameLabel);
        return await result.getText();
    }
    async addUserFirstNameInput() {
        return await this.page.findElementByXPath(locator.addUserFirstNameInput);
    }
    async addUserLastNameLabel() {
        let result = await this.page.findElementByXPath(locator.addUserLastNameLabel);
        return await result.getText();
    }
    async addUserLastNameInput() {
        return await this.page.findElementByXPath(locator.addUserLastNameInput);
    }
    async addUserEmailLabel() {
        let result = await this.page.findElementByXPath(locator.addUserEmailLabel);
        return await result.getText();
    }
    async addUserEmailInput() {
        return await this.page.findElementByXPath(locator.addUserEmailInput);
    }
    async addUserMobileLabel() {
        let result = await this.page.findElementByXPath(locator.addUserMobileLabel);
        return await result.getText();
    }
    async addUserMobileInput() {
        return await this.page.findElementByXPath(locator.addUserMobileInput);
    }

    async addUserButton() {
        return await this.page.findElementByXPath(locator.addUserButton);
    }
    async addUserBackButton() {
        let result = await this.page.findElementByLink(locator.addUserBackButton);
        return result.getText();
    }
    async addUserSuccessMessage() {
        let result = await this.page.findElementByXPath(locator.addUserSuccessMessage);
        return result.getText();
    }
    async addUserErrorMessage() {
        let result = await this.page.findElementByXPath(locator.addUserErrorMessage);
        return result.getText();
    }
}

module.exports = { AddUserPage };