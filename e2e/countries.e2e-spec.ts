import { CountriesPage } from './countries.po';

describe('fb-app1 Countries', () => {
  let page: CountriesPage;

  beforeEach(() => {
    page = new CountriesPage();
  });

  it('should navigate to countries and have bread crumbs', () => {
    page.navigateToCountries();
    expect($$('ol li').count()).toEqual(2);
  });
  
});
