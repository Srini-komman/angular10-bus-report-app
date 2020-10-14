import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get('browser.baseUrl') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1.bus-report-title')).getText() as Promise<string>;
  }

  getOrganisationHeader = () => {
    return element.all(by.css('li.organisation-bus-details'));
  }

  getBusDetailsTable = () => {
    return element(by.css('table.content-bus-details-table'));
  }

  getOrganisationTitles(): Promise<string> {
    return element(by.css('span.organisation-title')).getText() as Promise<string>;
  }


}
