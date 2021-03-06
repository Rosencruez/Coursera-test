(function () {
'use strict';
angular.module('Data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath','https://davids-restaurant.herokuapp.com');

function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories  = function() {
    var response = $http({
      method:'GET',
      url: (ApiBasePath + "/categories.json")
    }).then(function(result){
      return result.data;
    });

    return response;
  };

  service.getItemsForCategory = function(categoryShortName) {
	 var response = $http({
      method:'GET',
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function(result){
      return result.data.menu_items;
    });

    return response;
  }

}

})();
