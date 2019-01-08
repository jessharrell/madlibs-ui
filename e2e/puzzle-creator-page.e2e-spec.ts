import {AppPage} from './app.po';
import {v4 as uuid4} from 'uuid';

describe('madlibs-ui create new page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectCreatePuzzle();
  });

  it('should store puzzle in library when given title, id, and text', async() => {
    const id = uuid4().toString();
    page.getPuzzleIdInput().sendKeys(id);
    const puzzleTitle = 'Static Puzzle';
    page.getPuzzleTitleInput().sendKeys(puzzleTitle);

    page.clickAddText();
    const puzzleContent = 'Some puzzle content';
    page.getLastStaticInput().sendKeys(puzzleContent);

    page.savePuzzle();
    page.waitForPuzzleSelectorToContain(id);
    expect(page.getAvailablePuzzleIds()).toContain(id);
    page.selectPuzzleNamed(id);

    page.waitForPuzzleTitleToBe(puzzleTitle);
    expect(page.getPuzzleTitle()).toEqual(puzzleTitle);

    const texts = await page.getAllPuzzleTexts();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toEqual(puzzleContent);
  });

  it('should store puzzle given puzzle with text, newline, noun', async() => {
    const id = uuid4().toString();
    page.getPuzzleIdInput().sendKeys(id);
    const puzzleTitle = 'Static Puzzle';
    page.getPuzzleTitleInput().sendKeys(puzzleTitle);

    page.clickAddText();
    const puzzleContent = 'Some puzzle content';
    page.getLastStaticInput().sendKeys(puzzleContent);

    page.clickAddNewline();

    page.clickAddDynamic();
    const dynamicType = 'noun';
    page.getLastDynamicInput().sendKeys(dynamicType);

    page.savePuzzle();
    page.waitForPuzzleSelectorToContain(id);
    expect(page.getAvailablePuzzleIds()).toContain(id);
    page.selectPuzzleNamed(id);

    const texts = await page.getAllPuzzleTexts();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toEqual(puzzleContent);

    const placeholders = await page.getAllPuzzlePlaceholders();
    expect(placeholders.length).toEqual(1);
    expect(placeholders[0]).toEqual('noun');

    expect(page.getAllPuzzleParagraphs().count()).toEqual(2);
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
