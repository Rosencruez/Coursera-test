(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/categoriesList.template.html',
  bindings: {
    items: '<'
  }
});

})();
