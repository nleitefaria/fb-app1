import { IndicatorsPage } from './indicators.po';

describe('fb-app1 IndicatorsPage', () => {
  let page: IndicatorsPage;

  beforeEach(() => {
    page = new IndicatorsPage();
  });

  it('should navigate to indicators and have bread crumbs', () => {
    page.navigateToIndicators();
    expect($$('ol li').count()).toEqual(2);
  });
  
});
