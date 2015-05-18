'use strict';
function IndexCtrl(accountService) {
    var vm =this;
    var result = accountService.getInfo();
    vm.avengers = result;
}

angular.module('myproject')

    .controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['accountService'];

