import {browser, by, element, promise} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  selectPuzzleNamed(name) {
    element(by.cssContainingText('option', name)).click();
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
