import {AppPage} from './app.po';

describe('madlibs-ui create new page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectCreatePuzzle();
  });

  it('should store puzzle in library when given title, id', async() => {
    const id = 'static';
    page.getPuzzleIdInput().sendKeys(id);
    page.getPuzzleTitleInput().sendKeys('Static Puzzle');

    page.savePuzzle();

    page.waitForPuzzleSelectorToContain(id);
    expect(page.getAvailablePuzzleIds()).toContain(id);
  });
});


describe('create new page from puzzle page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectPuzzleNamed('default');
    page.waitForPuzzleTitleToBe('Default');
    page.selectCreatePuzzle();
  });

  it('clears puzzle title', () => {
    expect(page.getPuzzleTitle()).toEqual('');
  });

  it('clear previous puzzle content', () => {
    expect(page.getAllPuzzleParagraphs().count()).toEqual(0);
  });
});
