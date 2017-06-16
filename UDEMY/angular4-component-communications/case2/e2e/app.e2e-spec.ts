import { Case1Page } from './app.po';

describe('case1 App', () => {
  let page: Case1Page;

  beforeEach(() => {
    page = new Case1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
