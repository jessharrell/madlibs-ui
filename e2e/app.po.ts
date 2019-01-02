import {browser, by, element, promise} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAllPuzzleTexts() {
     return element.all(by.css('.puzzleText')).map(el => el.getText());
  }
}
