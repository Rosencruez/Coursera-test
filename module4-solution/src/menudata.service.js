(function () {

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('APIBasePath', "https://davids-restaurant.herokuapp.com"); //reuse from the last assignment

MenuDataService.$inject = ['$http', 'APIBasePath'] //need these to grab from the json
function MenuDataService($http, APIBasePath) {

var service = this;

service.getAllCategories = function () { //start of getAllCategories function
  /*
  this method should return a promise which is a result of using the `$http` service,
  using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
  */
  var response = $http({
    method: "GET",
    url: (APIBasePath + "/categories.json")
  }).then(function(result){
      console.log("get categories");
      return result.data;
    });
  return response;
};

service.getItemsForCategory(categoryShortName) = function () {
  /*
  this method should return a promise which is a result of using the `$http` service,
  using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
  where, before the call to the server, your code should append whatever `categoryShortName` value was
  passed in as an argument into the `getItemsForCategory` method.
  */
  var response = $http({
    method: "GET",
    url: (APIBasePath + "/menu_items.json"),
    params: {
      category: categoryShortName
    }
  }).then(function(result){
    console.log("get items");
      return result.data.menu_items;
    });
  return response;
  };
}
})(); //end of function
