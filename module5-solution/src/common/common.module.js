(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://rosencruez.github.io/Coursera-test/module5-solution')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
