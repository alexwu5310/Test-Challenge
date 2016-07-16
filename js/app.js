'use strict';

var myApp = angular.module('SignUpApp', []);
myApp.controller('FormCtrl', ['$scope', function($scope){
    $scope.submitForm = function(form){
        console.log('$valid', form.birthdate.$valid)
        console.log('$error', form.birthdate.$error)
        $scope.showSuccessAlert = true;
    };
    
    $scope.validateDOB = function() {
        var dob = document.forms["signUpForm"]["birthdate"].value;
        console.log(dob);
        var split = dob.split('/');
        console.log(split);

        var age = 2016 - split[2];
        console.log(age);
        if (age < 13) {
            $scope.signUpForm.birthdate.$setValidity('birthdate', false);
            return false;
        }
        else {
            $scope.signUpForm.birthdate.$setValidity('birthdate', true);
            return true;
        }
    };
    
    $scope.matching = function() {
        //console.log('entered');
        var password = document.forms["signUpForm"]["password"].value;
        console.log(password);
        var passwordConfirm = document.forms["signUpForm"]["passwordConfirm"].value;        
        console.log(passwordConfirm);

        if (password === passwordConfirm) {
            $scope.signUpForm.passwordConfirm.$setValidity('passwordConfirm', true);
        } else {
            $scope.signUpForm.passwordConfirm.$setValidity('passwordConfirm', false);
        }
    };


}]);