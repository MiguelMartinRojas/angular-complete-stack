import { browser, by, element, WebElement } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root > div > mat-toolbar > h1')).getText();
  }

  async getProductInput(): Promise<WebElement> {
    return element(by.id('post-input'));
  }

  async getProductInputButton(): Promise<WebElement> {
    return element(by.id('input-button'));
  }

  async getProductList(): Promise<Array<WebElement>> {
    return element.all(by.css('app-list-posts li'));
  }

  async getProductTitle(webElement: WebElement): Promise<String> {
    return webElement.getText()
  }
}
