'use strict';

var myApp = angular.module('SignUpApp', []);

myApp.controller('FormCtrl', ['$scope', function($scope){
    $scope.submitForm = function(form){

        console.log('$valid', form.birthdate.$valid)
        console.log('$error', form.birthdate.$error)
        validateDOB();
        confirmPassword();
        // if(form.$valid) {
        // 	window.alert('Payment info has been submitted!');
        // }
        // else {
        // 	window.alert('There was an error submitting your payment. Please check that your information is correct.');
        // }
    };
    function validateDOB() {
        var dob = document.forms["signUpForm"]["birthdate"].value;
        var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        if (dob == null || dob == "" || !pattern.test(dob)) {
            return false;
        }
        else {
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