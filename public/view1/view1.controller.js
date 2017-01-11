angular.module('View1Ctrl', [])
  .controller('View1Controller', function($scope, View1) {

    function init() {
      getThings();
    }

    function getThings() {
      View1.get()
        .then(function(res) {
        res.data.forEach(function(ele){
          list.push(ele);
        });
      });
    }

    var info = 'View 1';
    var list = [];    
    var input = function(input) {
      View1.post(input);
    };
    var removeThing = function(id) {
      View1.delete(id);
    };
    

    angular.extend(this, {
      info : info,
      input : input,
      list : list,
      removeThing : removeThing
    });
    init();
  });