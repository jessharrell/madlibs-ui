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
    return browser.wait(ExpectedConditions.presenceOf(element(by.css('#' + expectedPuzzleId + '_selector'))));
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
}
