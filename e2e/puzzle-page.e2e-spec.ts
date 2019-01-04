import { AppPage } from './app.po';

describe('madlibs-ui puzzle page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.selectPuzzleNamed('default');
    page.waitForPuzzleTitleToBe('Default');
  });

  describe('single line puzzle', () => {
    beforeEach(() => {
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

    it('should have single paragraph', async() => {
      const paragraphs = await page.getAllPuzzleParagraphs();
      expect(paragraphs.length).toEqual(1);
    });
  });

  describe('3 line puzzle', () => {
    beforeEach(() => {
      page.selectPuzzleNamed('seashore');
      page.waitForPuzzleTitleToBe('Sally\'s Shells');
    });

    it('should have paragraph for each newline', async() => {
      const paragraphs = await page.getAllPuzzleParagraphs();
      expect(paragraphs.length).toEqual(3);
    });
  });

  describe('different 3 line puzzle', () => {
    beforeEach(() => {
      page.selectPuzzleNamed('puppies');
      page.waitForPuzzleTitleToBe('Puppies');
    });

    it('should have paragraph for each newline', async() => {
      const paragraphs = await page.getAllPuzzleParagraphs();
      expect(paragraphs.length).toEqual(3);
    });
  });
});
