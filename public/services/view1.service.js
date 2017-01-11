angular.module('View1Service', [])
  .factory('View1', ['$http', function($http) {

    return {

      get : function() {
        return $http.get('/api/things');
      },

      post : function(thingData) {
        return $http.post('/api/things', thingData);
      },

      delete : function(id) {
        return $http.delete('/api/things/' + id);
      }

    };


  }]);