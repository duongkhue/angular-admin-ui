'use strict';


angular
    .module('myproject')
    .controller('IndexController', IndexController);

function IndexCtrl(accountService) {
    var vm =this;
    var result = accountService.getInfo();
    vm.avengers = result;
}

IndexController.$inject = ['accountService'];

