(function(){
'use strict';

var myApp = angular.module('LunchCheck', []);
myApp.controller('LunchCheckController', function($scope){
  $scope.message = "";
  $scope.messageClass = "";
  $scope.lunch = "";

  $scope.clear = function() {
    $scope.message = "";
    $scope.messageClass = "";
    $scope.lunch = "";
  }

  $scope.checkLunck = function() {
    var myResult = CheckMyLunch($scope.lunch, ",");
    switch (myResult) {
      case "0":
          $scope.messageClass = "text-danger border border-danger";
          $scope.message = "Please enter data first.";
          break;
      case "1":
          $scope.messageClass = "text-success border border-success";
          $scope.message = "Enjoy!";
          break;
      case "2":
          $scope.messageClass = "text-success border border-success";
          $scope.message = "Too much!";
          break;
    }
  }
});

function CheckMyLunch(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    var filtered = arrayOfStrings.filter(function(str) {
        return /\S/.test(str);
    });
    var length = filtered.length ;
    if (filtered == null || filtered.length === 0)
    {
      return "0";
    }
    else if( filtered.length > 3)
    {
      return "2";
    }
    else
    {
      return "1";
    }
  }

})();
