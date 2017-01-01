(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListCheckOffController', ShoppingListCheckOffController)
.controller('list1Controller', list1Controller)
.controller('list2Controller', list2Controller)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

list1Controller.$inject = ['$scope', 'ShoppingListCheckOffService']; /* first controller */
function list1Controller($scope, ShoppingListCheckOffService, AlreadyBoughtController) {
  var ToBuyController = this; /* controller as syntax */
  ToBuyController = []; //empty array
  $scope.ToBuyController = ToBuyController; /* add to scope */

  $scope.populate = function (array) {
       ShoppingListCheckOffService.populateItems(array);
   }

  $scope.remove = function (array1, array2, index) {
    //ToBuyController.splice(index, 1);
    ShoppingListCheckOffService.removeItem(array1, array2, index);
  }
}


list2Controller.$inject = ['$scope', 'ShoppingListCheckOffService']; /* second controller */
function list2Controller($scope, ShoppingListCheckOffService, ToBuyController) {
  var AlreadyBoughtController = this; /* controller as syntax */
  AlreadyBoughtController = []; /* empty array */
  $scope.AlreadyBoughtController = AlreadyBoughtController;
}
/* inject to protect from minification */
ShoppingListCheckOffController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ShoppingListCheckOffController($scope) { /* dollar sign reserved for angularJS */
  $scope.name = ""; /* string starts as empty */
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList1.push(newItem);
  $scope.add = function(array2) {
    ShoppingListCheckOffService.addItem(array2);
  };
};

function ShoppingListCheckOffService() {
  var service = this;
  var items =  [
    {
      name: "Chicken Nuggets",
      quantity: "200"
    },
    {
      name: "Biscuits",
      quantity: "50"
    },
    {
      name: "Ice Cream Sandwiches",
      quantity: "100"
    },
    {
      name: "Hot Dogs",
      quantity: "10"
    },
    {
      name: "Cakes",
      quantity: "20"
    }
  ];
  var i = this;
  i =
  {
    name: "",
    quantity: ""
  };
  service.populateItems = function (array) {
    // for(var a=0;a<(items.length);a++) {
    //   console.log(array.length);
    //   array[a].name = items[a].name;
    //   array[a].quantity = items[a].quantity;
    //   console.log(items[a].name + " " + items[a].quantity);
    // };
    array = items.slice();
    for (var a=0; a<array.length; a++) {
      console.log(array[a]);
    }
    console.log(array.length);
    };

  service.addItem = function (array2) { //add an item function
  var item = { //variable with multiple aspects
    name: itemName,
    quantity: quantity
  };

  // for(var i=0; i<array.length, i++){
  //   items.push(array(i)); //push this new item variable into the items array
  // }
  // array2.push({
  //    "name": i.name,
  //    "quantity": i.quantity
  // });
};
  service.removeItem = function(array1, array2, index) {
      i = array1[index]; //this removes the item
      array1.splice(index, 1);
      console.log("This is " + i.name + " " + i.quantity);
      if(!array2) {
        console.log("Uh oh");
      };
      // array2.push({
      //   "name": i.name,
      //   "quantity": i.quantity
      // }); //push from buying list to bought list
    };


    // $scope.ToBuyController.indexOf(item);
    // console.log($scope.ToBuyController.indexOf(item));
    // var newItem = $scope.ToBuyController.splice(index, 1);
    // $scope.AlreadyBoughtController.push(newItem);

};
})();
