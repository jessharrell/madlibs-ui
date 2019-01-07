import {AppPage} from './app.po';

describe('madlibs-ui initial page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectCreatePuzzle();
  });

  it('should store puzzle in library when given title', () => {
    page.getPuzzleTitleInput().sendKeys('Static Puzzle');
    page.savePuzzle();
  });
});
