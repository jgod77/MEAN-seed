angular.module('MainCtrl', [])
  .controller('MainController', function($scope) {

    var info = 'Home Page';

    angular.extend(this, {
      info : info
    });
  });