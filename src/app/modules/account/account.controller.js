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

function LoginController($auth){
    var vm = this;
    vm.titlepage = 'Login';
    vm.authenticate = function(provider){
        $auth.authenticate(provider)
        .then(function() {
                console.log("login success");
            /*$alert({
                content: 'You have successfully logged in',
                animation: 'fadeZoomFadeDown',
                type: 'material',
                duration: 3
            });*/
        })
            .catch(function(response) {
                console.log("login error");
                /*$alert({
                    content: response.data ? response.data.message : response,
                    animation: 'fadeZoomFadeDown',
                    type: 'material',
                    duration: 3
                });*/
            });
    }
}

function LogoutController($auth){
    $auth.logout();
}
IndexController.$inject = ['accountService'];