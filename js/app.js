'use strict';

var myApp = angular.module('SignUpApp', []);

myApp.controller('FormCtrl', ['$scope', function($scope){
    $scope.submitForm = function(form){
          
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

}]);