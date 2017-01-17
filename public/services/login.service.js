angular.module('LoginService', [])
  .factory('Login', ['$http', function($http) {
    var modalOpen = false;

    return {

      toggleModal : function() {
        this.modalOpen = !this.modalOpen;
      },

      modalOpen : modalOpen

    };


  }]);