const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

describe('Element Interactions', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Send Keys, Clear and Click, ', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

    await driver.manage().setTimeouts({implicit: 500});

    let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));

    await textBox.sendKeys('Selenium');
    await submitButton.click();
  });

  it('Select ', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  });

  after(async () => await driver.quit());
});