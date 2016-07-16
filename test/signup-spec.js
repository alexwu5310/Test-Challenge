//sidnup-spec.js
'use strict';

describe('Sign-Up Form', function(){

    it('submit button should be enable aslong as the form have valid input', function() {

        //open the webpage
        browser.get('http://localhost:8080');

        var input_email = element(by.css('#email'));
        var input_fname = element(by.css('#firstName'));
        var input_lname = element(by.css('#lastName'));
        var input_date = element(by.css('#birthdate'));
        var input_password = element(by.css('#password'));
        var input_confirm = element(by.css('#passwordConfirm'));
        var button = element(by.css('#submit-button'));

        //has valid content, is enabled
        input_email.sendKeys('a@a.com');
        input_fname.sendKeys('Alex');
        input_lname.sendKeys('Wu');
        input_date.sendKeys('18/07/1995');
        input_password.sendKeys('password');
        input_confirm.sendKeys('password');
        expect(button.isEnabled()).toEqual(true);

        //has no content, is not enabled
        input_email.clear();
        input_fname.clear();
        input_lname.clear();
        input_date.clear();
        input_password.clear();
        input_confirm.clear();
        expect(button.isEnabled()).toEqual(false);
    });

    it('eamil field should show validation error if the input is not a valid email address', function() {
        //open the webpage
        browser.get('http://localhost:8080');

        var input_email = element(by.css('#email'));
        var error = element(by.css('#email-error'));
        var input_fname = element(by.css('#firstName'));

        //has valid content, massage is hide
        input_email.sendKeys('a@a.com');
        expect(error.isDisplayed()).toEqual(false);

        //has invalid content and selected other field, massage is shown
        input_email.clear();
        input_email.sendKeys('123');
        input_fname.sendKeys('Alex');
        expect(error.isDisplayed()).toEqual(true);
    });

});

beforeEach(function() {
    browser.refresh();
});

describe('Birthdate', function() {
    browser.get('http://localhost:8080/index.html');
    var age = element(by.css('#birthdate'));
    var error = element(by.css('#showError'));
    
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

describe('Password Input', function() {
    browser.get('http://localhost:8080/index.html');
    var password = element(by.css('#password'));
    var passwordConfirm = element(by.css('#passwordConfirm'));
    var error = element(by.css('#errorMess'));
    
    it('should display error message at passwordConfirm when passwords do not match', function() {
        password.sendKeys('apwd');
        passwordConfirm.sendKeys('123');
        expect(error.isDisplayed()).toBe(true);
        
    });

    it('should display error message at passwordConfirm when passwords matches', function() {
        password.sendKeys('apwd');
        passwordConfirm.sendKeys('apwd');
        expect(error.isDisplayed()).toBe(false);
        
    });
});

