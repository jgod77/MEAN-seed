angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl : './main/home.html',
        controller : 'MainController'
      })
      .when('/view1', {
        templateUrl : './view1/view1.html',
        controller : 'View1Controller'
      })
      .when('/view2', {
        templateUrl : './view2/view2.html',
        controller : 'View2Controller'
      })
      .otherwise({
        redirectTo : '/'
      });

    $locationProvider.html5Mode(true);

  }]);