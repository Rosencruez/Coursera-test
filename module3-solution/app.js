(function () {
'use strict';

angular.module('NarrowItDownApp', []) //step 2
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  //this commented out code I know prints out the menu item ID, name, and description

  // var promise = MenuSearchService.getMenuCategories(); // promise calls service to get menu categories, returns promise
  //
  // promise.then(function (response) { // resolves the promise
  //   menu.categories = response.data.menu_items; //json, array assigned to categories property of our menu
  // })
  // .catch(function (error) { // catch to handle errors
  // console.log("Something went terribly wrong.");
  // });

  menu.slim = function (searchTerm) {
    menu.found = []; //array

    //if searchTerm is an empty string
    if (!searchTerm || searchTerm.length === 0 || !searchTerm.trim) {
      console.log("empty");
      menu.errorMessage = "Nothing found";
    }
    else { //if searchTerm is NOT an empty string
      var narrowSearch = MenuSearchService.getMatchedMenuItems(searchTerm); //go grab the menu items in the json
      console.log("not empty?");
      narrowSearch.then (function (response) { //run through via promises
        if (response.length == 0) { //if no results found
          menu.found = []; //empty array
          menu.errorMessage = "Nothing found"; //display the error message
          console.log("empty");
        }
        else { //if results are found
          menu.found = response; //populate array with matches
          menu.errorMessage = ""; //empty error message
        }
        }).catch (function (error) { //unsuccessful
          console.log("UH OH");
        });
      }
    };
    menu.removeItem = function (index) { //remove item function
      console.log("click");
      menu.found.splice(index, 1); //splice function removes item as specified position
    };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']; //service, inject http, and inject constant to use
function MenuSearchService($http, ApiBasePath) { //inject constant into function
  var service = this; // service local variable equal to this
  var foundArray = [];

  service.getMenuCategories = function () { // main method to use
    var response = $http({ // http service
      method: "GET", // tell http service to use a get request
      url: (ApiBasePath + "/menu_items.json") // url to categories, string concatination
    });

    return response; //return to promise (called by controller in this case)
  };

  //ApiBasePath gives the URL to be used
  service.getMatchedMenuItems = function (searchTerm) { // main method to use
    console.log("click button");
    var answer = $http({ // http service
      method: "GET", // tell http service to use a get request
      url: (ApiBasePath + "/menu_items.json") // url to categories, string concatination
    }).then(function (response) {
      var foundMenu = response.data.menu_items;
      service.matchMenu(foundMenu, searchTerm);
      return foundArray;
    });
    return answer;
  };

    service.matchMenu = function (foundMenu, searchTerm) {
      foundArray = [];

      for (var a = 0; a < foundMenu.length; a++) {
        if (foundMenu[a].description.indexOf(searchTerm) !== -1) {
          foundArray.push(foundMenu[a]);
        }
      }
      return foundArray;
    };
  }

function FoundItems () {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<' //we're not changing anything
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'foundItemsDirective',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController () {
  var foundCtrl = this;
}
})();
