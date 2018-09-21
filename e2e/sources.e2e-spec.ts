import { SourcesPage } from './sources.po';

describe('fb-app1 IndicatorsPage', () => {
  let page: SourcesPage;

  beforeEach(() => {
    page = new SourcesPage();
  });

  it('should navigate to sources and have bread crumbs', () => {
    page.navigateToSources();
    expect($$('ol li').count()).toEqual(2);
  });
  
});
