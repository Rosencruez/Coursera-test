(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://juanacv-course5.herokuapp.com') //I don't know how to work with herokuapp
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
