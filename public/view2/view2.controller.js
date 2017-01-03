angular.module('View2Ctrl', [])
  .controller('View2Controller', function($scope) {

    var info = 'View 2';

    angular.extend(this, {
      info : info,
    });
  });