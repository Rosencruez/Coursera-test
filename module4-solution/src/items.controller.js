(function () {

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(items) {
  var ctrl = this;
  ctrl.items = items.data;
}

})();
