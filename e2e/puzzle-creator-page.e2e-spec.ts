import {AppPage} from './app.po';
const fs = require('fs-extra')

describe('madlibs-ui initial page', () => {
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

    await fs.remove('./test-puzzles/static');
  });
});
