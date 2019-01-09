import {browser, by, element, ExpectedConditions} from 'protractor';

export class AppPage {
  private readonly puzzleTitleFinder = element(by.css('#puzzleTitle'));

  navigateTo() {
    return browser.get('/');
  }

  selectPuzzleNamed(name) {
    element(by.cssContainingText('option', name)).click();
  }

  waitForPuzzleTitleToBe(expectedTitle) {
    return browser.wait(ExpectedConditions.textToBePresentInElement(this.puzzleTitleFinder, expectedTitle), 5000);
  }

  waitForPuzzleSelectorToContain(expectedPuzzleId) {
    return browser.wait(ExpectedConditions.presenceOf(element(by.css('#_' + expectedPuzzleId + '_selector'))));
  }

  getPuzzleTitle() {
    return this.puzzleTitleFinder.getText();
  }

  getAllPuzzleTexts() {
     return element.all(by.css('.puzzleText')).map(el => el.getText());
  }

  getAllPuzzlePlaceholders() {
    return element.all(by.css('.puzzleInput')).map(el => el.getAttribute('placeholder'));
  }

  getWelcomeMessage() {
    return element(by.css('#welcome'));
  }

  getAllPuzzleParagraphs() {
    return element.all(by.css('.puzzleParagraph'));
  }

  selectCreatePuzzle() {
    element(by.css('#createPuzzle')).click();
  }

  getPuzzleTitleInput() {
    return element(by.css('#puzzleTitleInput'));
  }

  getAllInputs() {
    return element.all(by.css('input'));
  }

  savePuzzle() {
    element(by.css('#savePuzzle')).click();
  }

  getPuzzleIdInput() {
    return element(by.css('#puzzleIdInput'));
  }

  getAvailablePuzzleIds() {
    return element.all(by.css('option')).map(el => el.getText());
  }

  clickAddText() {
    element(by.css('#createTextButton')).click();
  }

  getLastStaticInput() {
    return element.all(by.css('.staticInput')).last();
  }

  getLastDynamicInput() {
    return element.all(by.css('.dynamicInput')).last();
  }

  clickAddNewline() {
    element(by.css('#createNewlineButton')).click();
  }

  clickAddDynamic() {
    element(by.css('#createDynamicButton')).click();
  }

  addPuzzleTextWithValue(puzzleContent: string) {
    this.clickAddText();
    this.getLastStaticInput().sendKeys(puzzleContent);
  }

  addDynamicWithType(dynamicType: string) {
    this.clickAddDynamic();
    this.getLastDynamicInput().sendKeys(dynamicType);
  }
}
