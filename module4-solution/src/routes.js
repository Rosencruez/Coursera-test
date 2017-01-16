(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) { //start of RoutesConfig
//configure routes and view states

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
  url: '/',
  templateUrl: 'src/templates/home.template.html'
  })

  // categories page
  .state('categories', {
  url: '/categories',
  templateUrl: 'src/templates/categories.template.html',
  controller: 'CategoriesController as ctrl',
  resolve: {
    categories: ['MenuDataService', function(MenuDataService) {
      return MenuDataService.getAllCategories();
    }]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as ctrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })

}; //end of RoutesConfig
})();
