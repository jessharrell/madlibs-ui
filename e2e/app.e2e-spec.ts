import { AppPage } from './app.po';

describe('madlibs-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title of puzzle', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Default');
  });

  it('should display static text of puzzle', async () => {
    page.navigateTo();
    const texts = await page.getAllPuzzleTexts();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toEqual('This is only a');
  });

  it('should display dynamic placeholder in puzzle', async () => {
    page.navigateTo();
    const texts = await page.getAllPuzzlePlaceholders();
    expect(texts.length).toEqual(1);
    expect(texts[0]).toContain('noun');
  });
});
