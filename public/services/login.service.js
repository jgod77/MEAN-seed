angular.module('LoginService', [])
  .factory('Login', ['$http', function($http) {
    var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var modalOpen = false;
    var user = {
      email : '',
      password : '',
      passwordConfirm : '',
    };

    return {

      validateEmail : function(email) {
        return emailValidation.test(email)
      },

      toggleModal : function() {
        this.modalOpen = !this.modalOpen;
      },

      modalOpen : modalOpen,

      user : user

    };


  }]);