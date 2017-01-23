(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.myInfo = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

      service.getDish = function(shortName) {
      return $http.get(ApiPath+'/menu_items/'+shortName+'.json').then(function(response) {
        console.log(response.data);
        return response.data;
      }).catch(function(data) {
        return false;
      });
    }

    service.setMyInfo = function(myInfo) {
      service.myInfo = myInfo;
      console.log(service.myInfo);
    }

    service.getMyInfo = function() {
      console.log(service.myInfo);
      return service.myInfo;
    }

}



})();
