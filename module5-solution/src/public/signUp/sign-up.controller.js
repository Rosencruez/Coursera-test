(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signCtrl = this;
  signCtrl.result = "";
  signCtrl.submit = function() {
    MenuService.getDish(angular.uppercase(signCtrl.myInfo.favourite)).then(function(response) { //change to uppercase first
      if (response === false) { //no results
        //reg.result = "No such menu number exists"
        signCtrl.completed = false;
      }
      else { //results found
        signCtrl.myInfo.favourite = angular.uppercase(signCtrl.myInfo.favourite); //change to uppercase
        signCtrl.myInfo.title = response.name; //get name
        signCtrl.myInfo.description = response.description;
        signCtrl.completed = true;
        MenuService.setMyInfo(signCtrl.myInfo);
      }
    });
  }
}

})();
