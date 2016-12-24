(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

/* inject to protect from minification */
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) { /* dollar sign reserved for angularJS */
  $scope.name = ""; /* string starts as empty */
  $scope.checkList = function() {
      if (!$scope.name) { //if name is empty
        $scope.sayMessage = function () {
          return "Please enter data first";
        }; /* end of function */
      } /* end of if */
      else { //if name is not empty
              $scope.commaCount = ($scope.name).split(',');
              /*
                split function splits the string according to commas
                commaCount is an array of substrings from the original string
              */
              if ($scope.commaCount.length <= 3) { /* if two or less commas */
                  $scope.sayMessage = function () {
                  return "Enjoy!";
                }; /* end of function*/
              } /* end of if */
                else { /* more than three commas*/
                  $scope.sayMessage = function () {
                  return "Too much!";
                  return $scope.commaCount.length;
                  }; /* end of function */
                }; /* end of else */
    } /* end of else */
  };
};

})();
