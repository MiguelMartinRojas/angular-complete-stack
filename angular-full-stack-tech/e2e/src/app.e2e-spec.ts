import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('My Angular Store');
  });

  it('should create a new product', async () => {

    await page.navigateTo();

    await (await page.getProductInput()).sendKeys('Add a new product');
    await (await page.getProductInputButton()).click();

    var productList = await page.getProductList()
    expect(productList.length).toEqual(1);
    debugger

    expect(await (page.getProductTitle(productList[0]))).toContain('Add a new product');

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
