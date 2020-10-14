import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Bus Reports', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Bus Reports');
  });

  it('should open the bus details when clicking on specific organisation title', () => {
    page.navigateTo();
    page.getOrganisationHeader().click();
    browser.driver.sleep(800);
    expect(page.getBusDetailsTable()).not.toBeNull();
  });

  it('should display the organisation title Sydney Buses - 25/09/2015', () => {
    page.navigateTo();
    expect(page.getOrganisationTitles()).toEqual('Sydney Buses - 25/09/2015');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
