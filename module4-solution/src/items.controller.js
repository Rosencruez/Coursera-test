(function () {
'use strict';
angular.module('Data')
.controller('ItemsController',ItemsController);

ItemsController.$inject = ['dishes'];

function ItemsController(dishes) {
	var itemsCtrl = this;
	itemsCtrl.dishes = dishes;
}

})();
