import { browser, by, element } from 'protractor';

export class CountriesPage 
{
  navigateToCountries() 
  {
    return browser.get('/countries/');
  }

  
  
}
