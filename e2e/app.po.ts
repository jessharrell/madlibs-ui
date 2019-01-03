import {browser, by, element, ExpectedConditions} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  selectPuzzleNamed(name) {
    element(by.cssContainingText('option', name)).click();
  }

  waitForPuzzleTitleToBe(expectedTitle) {
    return browser.wait(ExpectedConditions.textToBePresentInElement(element(by.css('app-root h1')), expectedTitle), 5000);
  }

  getPuzzleTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getAllPuzzleTexts() {
     return element.all(by.css('.puzzleText')).map(el => el.getText());
  }

  getAllPuzzlePlaceholders() {
    return element.all(by.css('.puzzleInput')).map(el => el.getAttribute('placeholder'));
  }
}
