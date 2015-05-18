'use strict';
var app = angular.module('myproject', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap']);
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '@' : {
                    templateUrl: 'app/layout/index.html',
                    controller: 'IndexCtrl',
                    controllerAs: 'vm'
                },
                'header@home' : { templateUrl: 'app/layout/navbar.html'},
                'left@home' : { templateUrl: 'app/layout/navleft.html'},
                'content@home' : { templateUrl: 'app/modules/index.html'}
            }
        })

        .state('chart', {
            url: '/chart',
            views: {
                '@' : {
                    templateUrl: 'app/layout/index.html',
                    controller: 'ChartCtrl',
                    controllerAs: 'vm'
                },
                'header@chart' : { templateUrl: 'app/layout/navbar.html'},
                'left@chart' : { templateUrl: 'app/layout/navleft.html'},
                'content@chart' : { templateUrl: 'app/modules/chart/chart.html'}
            }
        })
        .state('profile', {
            url: '/profile',
            views: {
                '@' : {
                    templateUrl: 'app/layout/index.html',
                    controller: 'ProfileCtrl',
                    controllerAs: 'vm'
                },
                'header@profile' : { templateUrl: 'app/layout/navbar.html'},
                'left@profile' : { templateUrl: 'app/layout/navleft.html'},
                'content@profile' : { templateUrl: 'app/modules/account/profile.html'}
            }
        })
        .state('addPost', {
            url: '/addPost',
            views: {
                '@' : {
                    templateUrl: 'app/layout/index.html',
                    controller: 'addPostCtrl',
                    controllerAs: 'vm'
                },
                'header@addPost' : { templateUrl: 'app/layout/navbar.html'},
                'left@addPost' : { templateUrl: 'app/layout/navleft.html'},
                'content@addPost' : { templateUrl: 'app/modules/post/add_post.html'}
            }
        })
        .state('listPost', {
            url: '/listPost',
            views: {
                '@' : {
                    templateUrl: 'app/layout/index.html',
                    controller: 'listPostCtrl',
                    controllerAs: 'vm'
                },
                'header@listPost' : { templateUrl: 'app/layout/navbar.html'},
                'left@listPost' : { templateUrl: 'app/layout/navleft.html'},
                'content@listPost' : { templateUrl: 'app/modules/post/list_post.html'}
            }
        })
        .state('login', {
            url: '/login',
            views: {
                '@' : {
                    templateUrl: 'app/layout/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                },
                'content@login' : { templateUrl: 'app/modules/account/login.html'}
            }
        });

    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push(function($q, $location, $window) {
        return {
            'responseError': function(response) {
                if(response.status === 401) {
                    $window.location.href = '/login'; //Unauthorized ,
                }
                else if (response.status === 403){
                    $location.path('/403');
                    //Forbidden
                    // to do
                }
                return $q.reject(response);
            }
        };
    });
  })
;
app.run(function($rootScope, $location, $state, accountService) {


    $rootScope.$on( '$stateChangeStart', function(e, toState) {

        var isLogin = toState.name === 'login';
        if(isLogin){
            return; // no need to redirect
        }

        // now, redirect only not authenticated

        var userInfo = accountService.authentication();

        if(userInfo.isAuthenticated === false) {
            e.preventDefault(); // stop current execution
            $state.go('login'); // go to login
        }
    });
});
