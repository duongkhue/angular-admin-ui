'use strict';


angular
    .module('myproject')
    .controller('IndexController', IndexController);

function IndexController(accountService) {
    var vm =this;
    vm.titlepages = 'Dashboard';
    var result = accountService.getInfo();
    vm.avengers = result;

}

IndexController.$inject = ['accountService'];

