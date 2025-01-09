const {By, Builder, locateWith} = require('selenium-webdriver');
const assert = require("assert");

describe('Locator Finders', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Finding Methods', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    
    // 
  });

  after(async () => await driver.quit());
});