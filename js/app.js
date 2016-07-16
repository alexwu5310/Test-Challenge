'use strict';

var myApp = angular.module('SignUpApp', []);

myApp.controller('FormCtrl', ['$scope', function($scope){
    $scope.submitForm = function(form){
        console.log('$valid', form.birthdate.$valid)
        console.log('$error', form.birthdate.$error)
        confirmPassword();
        // if(form.$valid) {
        // 	window.alert('Payment info has been submitted!');
        // }
        // else {
        // 	window.alert('There was an error submitting your payment. Please check that your information is correct.');
        // }
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
            return true
        }
    } 
    
    function confirmPassword() {
        var same = (passwordConfirm.value === password.value);
        if(same) {
            $scope.signUpForm.passwordConfirm.$setValidity('passwordConfirm', true);
        } else {
            $scope.signUpForm.passwordConfirm.$setValidity('passwordConfirm', false);
            //above works
            //document.getElementById("#password-confirm").innerHTML = "passwords do not match";
        }
    }


}]);