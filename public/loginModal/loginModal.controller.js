angular.module('ModalCtrl', [])
  .controller('ModalController', function($scope, $document, Login) {



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



    var focusInput = function(input) {
      if (input === 'email') {
        angular.element($document[0].querySelector('#email'))
          .addClass('input-selected');
      }
      if (input === 'password') {
        angular.element($document[0].querySelector('#password'))
          .addClass('input-selected');
      }
      if (input === 'passwordConfirm') {
        angular.element($document[0].querySelector('#passwordConfirm'))
          .addClass('input-selected');
      }
    };
    var blurInput = function(input) {
      if (input === 'email' && Login.user.email.length < 1) {
        angular.element($document[0].querySelector('#email'))
          .removeClass('input-selected');
      }
      if (input === 'password' && Login.user.password.length < 1) {
        angular.element($document[0].querySelector('#password'))
          .removeClass('input-selected');
      }
      if (input === 'passwordConfirm' && Login.user.passwordConfirm.length < 1) {
        angular.element($document[0].querySelector('#passwordConfirm'))
          .removeClass('input-selected');
      }
    };


    angular.extend(this, {
      selectSignUp : selectSignUp,
      selectSignIn : selectSignIn,
      email : email, 
      focusInput : focusInput,
      blurInput : blurInput,
      Login : Login
    });
  });