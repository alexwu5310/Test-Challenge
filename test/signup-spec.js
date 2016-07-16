//sidnup-spec.js
'use strict';

beforeEach(function() {
    browser.refresh();
});

describe('Birthdate', function() {
    browser.get('http://localhost:8080/index.html');
    var age = element(by.css('#birthdate'));
    var error = element(by.css('#birth-date'));
    
    it('should display error message if age not over 13', function() { 
        age.sendKeys('10/25/2009');
        expect(error.isDisplayed()).toBe(true);
    });

    it('should not display error message if over 13', function() {
        age.sendKeys('10/25/1995');
        expect(error.isDisplayed()).toBe(false);
    });

    it('should display error message if not a date', function() {
        age.sendKeys(' ');
        expect(error.isDisplayed()).toBe(true);
    });
});

//works
describe('Last Name Input', function () {
   browser.get('http://localhost:8080/index.html');
   var lastName = element(by.css('#lastName'));
   var error = element(by.css('#last-name'));
    it('should display ng-show message if nothing was entered', function () {
        lastName.sendKeys('\t');
        expect(error.isDisplayed()).toBe(true);
    });
    
    it('should display no error message if something was entered', function() {
        lastName.sendKeys('Joy');
        expect(error.isDisplayed()).toBe(false);
    })
});

//doesn't work yet
describe('Password Input', function() {
    browser.get('http://localhost:8080/index.html');
    var password = element(by.css('#password'));
    var passwordConfirm = element(by.css('#passwordConfirm'));
    
    it('should display error message at passwordConfirm when passwords do not match', function() {
        password.sendKeys('apwd');
        passwordConfirm.sendKeys('apwd');
        
    })
});

