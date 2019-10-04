const { Builder, Capabilities, until, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

/** Share the same driver instance for all tests on same window */

const CHOROME_DRIVER =
    new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();

var Page = function () {
    const TIME_OUT = 1000;
    const ERROR_MSG = 'Looking for element but not found, check locator id please !!!';

    // get driver
    this.getDriver = () => {
        return CHOROME_DRIVER;
    };
    // visit a webpage
    this.visit = async (theUrl) => {
        return await this.getDriver().get(theUrl);
    };
    // wait 
    this.wait = async (waitTime) => {
        return await this.getDriver().manage().setTimeouts({ implicit: waitTime });
    };
    // quit current session
    this.quit = async () => {
        return await this.getDriver().quit();
    };

    // wait and find a specific element with it's id
    this.findElementById = async (id) => {
        await this.getDriver().wait(until.elementLocated(By.id(id)), TIME_OUT, ERROR_MSG);
        return await this.getDriver().findElement(By.id(id));
    };

    // wait and find a specific element with it's name
    this.findElementByName = async (name) => {
        await this.getDriver().wait(until.elementLocated(By.name(name)), TIME_OUT, ERROR_MSG);
        return await this.getDriver().findElement(By.name(name));
    };
    // wait and find a specific element with xPath
    this.findElementByXPath = async (xPath) => {
        await this.getDriver().wait(until.elementLocated(By.xpath(xPath)), TIME_OUT, ERROR_MSG);
        return await this.getDriver().findElement(By.xpath(xPath));
    };
    // wait and find a specific element with linkText
    this.findElementByLink = async (linkName) => {
        await this.getDriver().wait(until.elementLocated(By.linkText(linkName)), TIME_OUT, ERROR_MSG);
        return await this.getDriver().findElement(By.linkText(linkName));
    };
    // fill input web elements
    this.write = async (el, txt) => {
        return await el.sendKeys(txt);
    };
};

module.exports = Page;