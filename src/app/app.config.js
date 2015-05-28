'use strict';
var currentPage = '';
angular
    .module('myproject', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngResource',
        'ui.router',
        'ui.bootstrap',
        'angularFileUpload',
        'angularUtils.directives.dirPagination'
        ])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $stateProvider
            .state('home', {

                url: '/',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'IndexController',
                        controllerAs: 'vm',
                        title: 'Home'
                    },
                    'header@home' : { templateUrl: 'app/layout/navbar.html'},
                    'left@home' : { templateUrl: 'app/layout/navleft.html'},
                    'content@home' : { templateUrl: 'app/modules/index.html'}
                }
            })
            .state('chartType', {
                title: 'Chart',
                url: '/chartType',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'chartTypeController',
                        controllerAs: 'vm'
                    },
                    'header@chartType' : { templateUrl: 'app/layout/navbar.html'},
                    'left@chartType' : { templateUrl: 'app/layout/navleft.html'},
                    'content@chartType' : { templateUrl: 'app/modules/chart/chart.html'}
                }
            })
            .state('chartGauge', {
                title: 'Chart Gauge',
                url: '/chartGauge',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'chartGaugeController',
                        controllerAs: 'vm'
                    },
                    'header@chartGauge' : { templateUrl: 'app/layout/navbar.html'},
                    'left@chartGauge' : { templateUrl: 'app/layout/navleft.html'},
                    'content@chartGauge' : { templateUrl: 'app/modules/chart/chart.html'}
                }
            })
            .state('profile', {
                title: 'Profile',
                url: '/profile',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'ProfileController',
                        controllerAs: 'vm'
                    },
                    'header@profile' : { templateUrl: 'app/layout/navbar.html'},
                    'left@profile' : { templateUrl: 'app/layout/navleft.html'},
                    'content@profile' : { templateUrl: 'app/modules/account/profile.html'}
                }
            })
            .state('addPost', {
                title: 'Add Post',
                url: '/addPost',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'addPostController',
                        controllerAs: 'vm'
                    },
                    'header@addPost' : { templateUrl: 'app/layout/navbar.html'},
                    'left@addPost' : { templateUrl: 'app/layout/navleft.html'},
                    'content@addPost' : { templateUrl: 'app/modules/post/add_post.html'}
                }
            })
            .state('editPost', {
                title: 'Edit Post',
                url: '/editPost/{id:int}',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'editPostController',
                        controllerAs: 'vm'
                    },
                    'header@editPost' : { templateUrl: 'app/layout/navbar.html'},
                    'left@editPost' : { templateUrl: 'app/layout/navleft.html'},
                    'content@editPost' : { templateUrl: 'app/modules/post/add_post.html'}
                }
            })
            .state('listPost', {
                title: 'List Post',
                url: '/listPost',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'listPostController',
                        controllerAs: 'vm'
                    },
                    'header@listPost' : { templateUrl: 'app/layout/navbar.html'},
                    'left@listPost' : { templateUrl: 'app/layout/navleft.html'},
                    'content@listPost' : { templateUrl: 'app/modules/post/list_post.html'}
                }
            })
            .state('addImage', {
                title: 'Add Image',
                url: '/addImage',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'addImageController',
                        controllerAs: 'vm'
                    },
                    'header@addImage' : { templateUrl: 'app/layout/navbar.html'},
                    'left@addImage' : { templateUrl: 'app/layout/navleft.html'},
                    'content@addImage' : { templateUrl: 'app/modules/image/add_image.html'}
                }
            })
            .state('editImage', {
                title: 'Edit Image',
                url: '/editImage/{id:int}',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'editImageController',
                        controllerAs: 'vm'
                    },
                    'header@editImage' : { templateUrl: 'app/layout/navbar.html'},
                    'left@editImage' : { templateUrl: 'app/layout/navleft.html'},
                    'content@editImage' : { templateUrl: 'app/modules/image/add_image.html'}
                }
            })
            .state('listImage', {
                title: 'List Image',
                url: '/listImage',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/index.html',
                        controller: 'listImageController',
                        controllerAs: 'vm'
                    },
                    'header@listImage' : { templateUrl: 'app/layout/navbar.html'},
                    'left@listImage' : { templateUrl: 'app/layout/navleft.html'},
                    'content@listImage' : { templateUrl: 'app/modules/image/list_image.html'}
                }
            })
            .state('login', {
                title: 'Login',
                url: '/login',
                views: {
                    '@' : {
                        templateUrl: 'app/layout/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    },
                    'content@login' : { templateUrl: 'app/modules/account/login.html'}
                }
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true,
            requireBase: false});

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

    .run(function($rootScope, $location, $state, accountService) {

        $rootScope.$on( '$stateChangeStart', function(e, toState) {
            var isLogin = toState.name === 'login';
            currentPage = toState.name;
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
