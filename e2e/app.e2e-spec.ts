import { AppPage } from './app.po';

describe('madlibs-ui puzzle select', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('does not display puzzle before user has selected one', () => {
    expect(page.getPuzzleTitle()).toEqual('');
  });

  it('selecting puzzle should cause puzzle to display', () => {
    page.selectPuzzleNamed('default');
    page.waitForPuzzleTitleToBe('Default');
    expect(page.getPuzzleTitle()).toEqual('Default');
  });

  it('selecting not the default puzzle should cause other puzzle to display', () => {
    page.selectPuzzleNamed('seashore');
    page.waitForPuzzleTitleToBe( 'Sally\'s Shells');
    expect(page.getPuzzleTitle()).toEqual('Sally\'s Shells');
  });
});
