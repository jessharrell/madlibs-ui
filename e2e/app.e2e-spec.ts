import { AppPage } from './app.po';

describe('madlibs-ui puzzle select', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('selecting puzzle should cause puzzle to display', () => {
    page.selectPuzzleNamed('default');
    expect(page.getPuzzleTitle()).toEqual('Default');
  });
});
