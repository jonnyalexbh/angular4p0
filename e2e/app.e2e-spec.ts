import { Angular4p0Page } from './app.po';

describe('angular4p0 App', () => {
  let page: Angular4p0Page;

  beforeEach(() => {
    page = new Angular4p0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
