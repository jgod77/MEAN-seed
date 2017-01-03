angular.module('View1Ctrl', [])
  .controller('View1Controller', function($scope) {

    var info = 'View 1';
    var input = function(input) {
      console.log('input', input)
    };

    angular.extend(this, {
      info : info,
      input : input
    });
  });