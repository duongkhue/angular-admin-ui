/**
 * Created by Coder on 5/15/2015.
 */
'use strict';


angular
    .module('myproject')
    .controller('IndexController', IndexController)
    .controller('ProfileController', ProfileController)
    .controller('LoginController', LoginController)
    .controller('LogoutController', LogoutController);

function IndexController(accountService) {
    var vm =this;
    var result = accountService.getInfo();
    vm.avengers = result;
    /*getInfo();

    function getInfo(){
        return accountService.getInfo().then(function(data){
            vm.avengers = data;
            return vm.avengers;
        })
    }*/
}

function ProfileController(){
    var vm = this;
    vm.titlepage = 'Profile';
}

function LoginController(){
    var vm = this;
    vm.titlepage = 'Login';
}

function LogoutController(){

}
IndexController.$inject = ['accountService'];