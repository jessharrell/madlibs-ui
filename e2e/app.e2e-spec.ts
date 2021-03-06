import { AppPage } from './app.po';

describe('madlibs-ui initial page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('does not display puzzle title before user has selected one', () => {
    expect(page.getPuzzleTitle()).toEqual('');
  });

  it('does not display puzzle content before user has selected one', () => {
    expect(page.getAllPuzzleTexts()).toEqual([]);
    expect(page.getAllPuzzlePlaceholders()).toEqual([]);
  });

  it('does not display puzzle creation form before user select create puzzle', () => {
    expect(page.getAllInputs().count()).toEqual(0);
  });

  describe('puzzle selection', () => {

    it('selecting puzzle should cause puzzle to display', () => {
      page.selectPuzzleNamed('default');
      page.waitForPuzzleTitleToBe('Default');
      expect(page.getPuzzleTitle()).toEqual('Default');
    });

    it('selecting not the default puzzle should cause other puzzle to display', () => {
      page.selectPuzzleNamed('seashore');
      page.waitForPuzzleTitleToBe('Sally\'s Shells');
      expect(page.getPuzzleTitle()).toEqual('Sally\'s Shells');
    });
  });

  describe('creating new puzzle', () => {
    it('displays creation template', () => {
      page.selectCreatePuzzle();
      expect(page.getPuzzleTitleInput().getText()).toEqual('');
    });
  });
});
