(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['menuItems'];
function InfoController(menuItems) {
  // var $ctrl = this;
  // $ctrl.menuItems = menuItems;

  // controller for the "My Info" page
  // shows registered information from "Sign Up"
  // info includes first name, last name, email address, phone number, menu number that is their favourite dish
  // menu number is "short_name" attribute
  // show a picture of the menu item, as well as its title and description 

}

})();
