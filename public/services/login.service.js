angular.module('LoginService', [])
  .factory('Login', ['$http', function($http) {

    var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = true;

    var passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/; /* Minimum 8 characters at least 1 letter, 1 number, and 1 special character */
    var letter = /[a-zA-Z]+/;
    var number = /[0-9]+/;
    var special = /[!@#$%&*]+/;
    var validPassword = true;
    var password = {
      abc : false,
      '123' : false,
      special : false
    };

    var modalOpen = false;
    var user = {
      email : '',
      password : '',
      passwordConfirm : '',
    };

    return {

      validateEmail : function() {
        this.validEmail = emailValidation.test(this.user.email);
      },

      validatePassword : function() {
        this.validPassword = passwordValidation.test(this.user.password);
        this.password.abc = letter.test(this.user.password);
        this.password['123'] = number.test(this.user.password);
        this.password.special = special.test(this.user.password);
      },

      toggleModal : function() {
        this.modalOpen = !this.modalOpen;
      },

      modalOpen : modalOpen,

      user : user,

      validEmail : validEmail,

      validPassword : validPassword,

      password : password

    };


  }]);