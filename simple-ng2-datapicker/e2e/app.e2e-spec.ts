import { SimpleNg2DatapickerPage } from './app.po';

describe('simple-ng2-datapicker App', () => {
  let page: SimpleNg2DatapickerPage;

  beforeEach(() => {
    page = new SimpleNg2DatapickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
