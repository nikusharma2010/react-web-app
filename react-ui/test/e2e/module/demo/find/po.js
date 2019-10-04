const locator = require('./locator');

class FindUserPage {

    constructor(page) {
        this.page = page;
    }

    async findUserScreenHeader() {
        let result = await this.page.findElementByXPath(locator.findUserScreenHeader);
        return await result.getText();
    }
    async findUserLabel() {
        let result = await this.page.findElementByXPath(locator.findUserLabel);
        return await result.getText();
    }
    async findUserInputText() {
        return await this.page.findElementByXPath(locator.findUserInputText);
    }

    async findUserSearchButton() {
        return await this.page.findElementByXPath(locator.findUserSearchButton);
    }
    async findUserBackButton() {
        let result = await this.page.findElementByLink(locator.findUserBackButton);
        return result.getText();
    }
    async findUserDeleteButton() {
        let result = await this.page.findElementByXPath(locator.findUserDeleteButton);
        return result.getText();
    }
    async userReceivedEmployeeNo() {
        let label = await this.page.findElementByXPath(locator.userReceivedEmployeeNoLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedEmployeeNoValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeName() {
        let label = await this.page.findElementByXPath(locator.userReceivedNameLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedNameValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeEmail() {
        let label = await this.page.findElementByXPath(locator.userReceivedEmailLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedEmailValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async userReceivedEmployeeMobileNo() {
        let label = await this.page.findElementByXPath(locator.userReceivedMobileLabel);
        let value = await this.page.findElementByXPath(locator.userReceivedMobileValue);
        const result = { label: await label.getText(), value: await value.getText() };
        return result;
    }
    async findUserErrorMessage() {
        let result = await this.page.findElementByXPath(locator.findUserErrorMessage);
        return result.getText();
    }
}


module.exports = { FindUserPage };