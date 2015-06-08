'use strict';


angular
    .module('myproject')
    .controller('IndexController', IndexController);

function IndexController() {
    var vm =this;
    vm.titlepages = 'Dashboard';

}

IndexController.$inject = ['accountService'];

