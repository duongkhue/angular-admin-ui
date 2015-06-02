'use strict';

angular.module('myproject')
  .controller('NavbarCtrl', function ($scope, $location, $auth) {
        var vm = this;
        if($auth.getToken()){
            vm.isDisplay = true;
        } else{
            vm.isDisplay = false;
        }
  });
