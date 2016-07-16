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
