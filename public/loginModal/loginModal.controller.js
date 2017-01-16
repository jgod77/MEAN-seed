angular.module('ModalCtrl', [])
  .controller('ModalController', function($scope, $document) {



    var modalOpen = true;
    var toggleModal = function() {
      this.modalOpen = !this.modalOpen;
      console.log(this.modalOpen)
    };



    $scope.signup = false;
    var selectSignUp = function() {
      $scope.signup = true;
      angular.element($document[0].querySelector('#signin'))
        .addClass('modal-selector-selected');
    };
    var selectSignIn = function() {
      $scope.signup = false;
      angular.element($document[0].querySelector('#signin'))
        .removeClass('modal-selector-selected');
    };


    var login = {
      email : '',
      password : '',
      passwordConfirm : '',
    };

    var focusInput = function(input) {
      if (input === 'email') {
        this.email = 'E-Mail Address';
        angular.element($document[0].querySelector('#email'))
          .addClass('input-selected');
      }
      if (input === 'password') {
        this.password = 'Password';
        angular.element($document[0].querySelector('#password'))
          .addClass('input-selected');
      }
      if (input === 'passwordConfirm') {
        this.passwordConfirm = 'Confirm Password';
        angular.element($document[0].querySelector('#passwordConfirm'))
          .addClass('input-selected');
      }
    };
    var blurInput = function(input) {
      if (input === 'email' && this.login.email.length < 1) {
        this.email = '';
        angular.element($document[0].querySelector('#email'))
          .removeClass('input-selected');
      }
      if (input === 'password' && this.login.password.length < 1) {
        this.password = '';
        angular.element($document[0].querySelector('#password'))
          .removeClass('input-selected');
      }
      if (input === 'passwordConfirm' && this.login.passwordConfirm.length < 1) {
        this.passwordConfirm = '';
        angular.element($document[0].querySelector('#passwordConfirm'))
          .removeClass('input-selected');
      }
    };


    angular.extend(this, {
      toggleModal : toggleModal,
      modalOpen : modalOpen,
      selectSignUp : selectSignUp,
      selectSignIn : selectSignIn,
      email : email, 
      focusInput : focusInput,
      blurInput : blurInput,
      login : login
    });
  });