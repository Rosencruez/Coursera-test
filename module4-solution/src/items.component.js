(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/itemslist.template.html',
  bindings: {
    dishes: '<'
  }
});

})();
