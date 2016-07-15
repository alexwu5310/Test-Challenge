//sidnup-spec.js
'use strict';

describe('Submit Buton', function(){

    it('should be enable aslong as the form have valid input', function() {

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
});