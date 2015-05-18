(function() {
    'use strict';
    function accountService() {
        function getInfo() {
            // implementation details go here
            return 'test data';
        }
        function authentication(){
            var auth = {
                 isAuthenticated: true,
                 isAdmin: false
                 };
            return auth;
        }


        var service = {
            getInfo: getInfo,
            authentication: authentication
        };

        return service;
    }
    angular.module('myproject')
    .service('accountService', accountService);

})();