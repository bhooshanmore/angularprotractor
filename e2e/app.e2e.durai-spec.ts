import { browser, by, element } from 'protractor';

describe('First', function(){

  it('should launch quiz homepage', () => {
    browser.get('http://localhost:4200');
    expect(browser.getTitle()).toEqual('QuizzManiac');
  });

  it('should create quiz - Cancel operation', () => {
    browser.sleep(3000);
    element(by.css('body > app-root > div > div:nth-child(2) > app-start-page > md-card:nth-child(1) > div > ul > li:nth-child(4) > button')).click();
    browser.sleep(3000);
    element(by.buttonText('Cancel')).click();
  });

  it('should create quiz - OK operation', () => {
    browser.sleep(3000);
    element(by.css('body > app-root > div > div:nth-child(2) > app-start-page > md-card:nth-child(1) > div > ul > li:nth-child(4) > button')).click();
    browser.sleep(3000);
    element(by.css('input[id^=md-input]')).sendKeys('Duraiquiz1');
    browser.sleep(5000);
    element(by.buttonText('OK')).click();
  });

  it('should save quiz', () => {
     browser.sleep(5000);
      element(by.buttonText('Save quizz')).click();

  });

  it('should remove questions', () => {
     browser.sleep(5000);
      element(by.css('body > app-root > div > div:nth-child(2) > app-quizz-manager > ul > li:nth-child(4) > button')).click();
      browser.sleep(5000);
      element(by.css('body > app-root > div > div:nth-child(2) > app-question-list > md-list > button')).click();
      browser.sleep(5000);
      element(by.css('body > app-root > div > div:nth-child(2) > app-question-list > md-list > div > button.mat-button.mat-warn')).click();



  });

  it('should add questions', () => {
     browser.sleep(2000);
      element(by.css('body > app-root > div > div:nth-child(2) > app-question-list > md-list > button')).click();
      browser.sleep(2000);
      element(by.css('body > app-root > div > div:nth-child(2) > app-question-list > md-list > div > app-question > md-card > md-card-actions > button')).click();
      browser.sleep(10000);



  });


});
