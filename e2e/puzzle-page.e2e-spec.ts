import { AppPage } from './app.po';

describe('madlibs-ui puzzle page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectPuzzleNamed('default');
    page.waitForPuzzleTitleToBe('Default');
  });

  it('should display title of puzzle', () => {
    expect(page.getPuzzleTitle()).toEqual('Default');
  });

  it('should hide welcome message after puzzle is selected', () => {
    expect(page.getWelcomeMessage().isPresent()).toBeFalsy();
  });

  it('should display static text of puzzle', async () => {
    const texts = await page.getAllPuzzleTexts();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toEqual('This is only a');
  });

  it('should display dynamic placeholder in puzzle', async () => {
    const texts = await page.getAllPuzzlePlaceholders();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toContain('noun');
  });
});
