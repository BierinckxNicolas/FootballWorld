import { DrsFootballworldPage } from './app.po';

describe('drs-footballworld App', () => {
  let page: DrsFootballworldPage;

  beforeEach(() => {
    page = new DrsFootballworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
