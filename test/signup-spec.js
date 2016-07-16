//sidnup-spec.js
'use strict';
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