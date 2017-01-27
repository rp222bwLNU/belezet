import { CustomBelezetPage } from './app.po';

describe('custom-belezet App', function() {
  let page: CustomBelezetPage;

  beforeEach(() => {
    page = new CustomBelezetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
