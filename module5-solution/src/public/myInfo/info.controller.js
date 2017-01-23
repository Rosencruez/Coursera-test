(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['myInfo', 'ApiPath']
function InfoController(myInfo, ApiPath) {
  // var $ctrl = this;
  // $ctrl.menuItems = menuItems;

  // controller for the "My Info" page
  // shows registered information from "Sign Up"
  // info includes first name, last name, email address, phone number, menu number that is their favourite dish
  // menu number is "short_name" attribute
  // show a picture of the menu item, as well as its title and description

  // if not signed up yet, display "Not Signed Up Yet. Sign up Now!", Sign Up Now should be a link to sign up page
  // if signed up, show registered information, and favourite menu item
  // menu item picture displayed, title, description

  var infoCtrl = this;
  infoCtrl.info = myInfo;
  infoCtrl.showInfo = false;
  infoCtrl.basePath = ApiPath;
  if (infoCtrl.info !== null && infoCtrl.info !== undefined) {
    console.log(infoCtrl.info.firstname);
    infoCtrl.showInfo = true;
    }
  }

})();
