angular.module('NavBarCtrl', [])
  .controller('NavBarController', function($controller, Login) {


    angular.extend(this, {
      Login : Login
    });
  });