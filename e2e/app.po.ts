export class NgCoursePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-course-app h1')).getText();
  }
}
