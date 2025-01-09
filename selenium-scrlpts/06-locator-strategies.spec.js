const {By, Builder, locateWith} = require('selenium-webdriver');
const assert = require("assert");

describe('Locator strategies', function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('traditional locators', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    
    // id
    await driver.findElement(By.id('my-text-id')).sendKeys("first text");
    // name
    await driver.findElement(By.name('my-password')).sendKeys("password");
    // class name
    await driver.findElement(By.className("form-control-color")).click();
    // css selector
    await driver.findElement(By.css("input.form-control-color")).click();
    // link text
    await driver.findElement(By.linkText('Return to index')).click;
    await driver.forward();
    // partial link text
    await driver.findElement(By.partialLinkText('index')).click();
    await driver.forward();
    // tag name
    await driver.findElement(By.tagName('select')).click();
    // xpath
    await driver.findElement(By.xpath('//*[@id="my-check-2"]')).click();
  });

  it('relative locators', async function () {
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
    
    // above
    let textInput = locateWith(By.id('my-text-id')).above(By.name('my-password'));
    await driver.findElement(textInput).sendKeys('my text');
    // below
    // left of
    // right of
    // near
    // chaining relative locators


  });

  after(async () => await driver.quit());
});