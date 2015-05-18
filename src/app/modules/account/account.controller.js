/**
 * Created by Coder on 5/15/2015.
 */
'use strict';
function IndexCtrl(accountService) {
    var vm =this;
    var result = accountService.getInfo();
    vm.avengers = result;
}

function ProfileCtrl(){
    var vm = this;
    vm.titlepage = 'Profile';
}

function LoginCtrl(){
    var vm = this;
    vm.titlepage = 'Login';
}

function LogoutCtrl(){

}

angular.module('myproject')

    .controller('AccountCtrl', IndexCtrl)
    .controller('ProfileCtrl', ProfileCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('LogoutCtrl', LogoutCtrl);


IndexCtrl.$inject = ['accountService'];