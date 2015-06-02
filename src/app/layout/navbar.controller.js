'use strict';

angular.module('myproject')
  .controller('NavbarCtrl', function ($scope, $auth) {
        var vm = this;
        vm.isAuthenticated = function(){
            return $auth.getToken();
        }
  });
