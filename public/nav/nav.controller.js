angular.module('NavBarCtrl', [])
  .controller('NavBarController', function($controller, Login) {

    // var ModalController = $controller('ModalController', {'$scope' : '$scope'})
    var modal = function(){
      console.log('test')
      // ModalController.modalOpen = true;
    }

    angular.extend(this, {
      modal : modal,
      Login : Login
    });
  });