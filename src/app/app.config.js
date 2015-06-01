'use strict';
var currentPage = '';
var path_layout = './app/layout/';
var path_modules = './app/modules/';
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
        'angularUtils.directives.dirPagination',
        'datatables',
        'satellizer'
        ])

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $authProvider) {

        /*begin config authentication*/
        $authProvider.withCredentials = false,
        $authProvider.facebook({
            clientId: '1599615690280071',
            url: 'http://localhost:8000/auth/facebook.php'
        });

        $authProvider.google({
            clientId: '48885658359-791rlan9bdhuq9omjg9tbkva1f3hkovq.apps.googleusercontent.com',
            url: 'http://localhost:8000/auth/google.php'
        });

        $authProvider.github({
            clientId: '0ba2600b1dbdb756688b'
        });

        $authProvider.linkedin({
            clientId: '77cw786yignpzj'
        });

        $authProvider.yahoo({
            clientId: 'dj0yJmk9RldjUzZMNG1qWHpYJmQ9WVdrOVpISTVhMjg0TjJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mOQ--'
        });

        $authProvider.live({
            clientId: '0000000044108515'
        });

        $authProvider.twitter({
            url: '/auth/twitter'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: 'htpp://localhost:8000/auth....',
            redirectUri: window.location.origin,
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });

        /*end config authentication*/

        $stateProvider
            .state('home', {

                url: '/',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'IndexController',
                        controllerAs: 'vm',
                        title: 'Home'
                    },
                    'header@home' : { templateUrl: path_layout + 'navbar.html'},
                    'left@home' : { templateUrl: path_layout + 'navleft.html'},
                    'content@home' : { templateUrl: path_modules + 'index.html'}
                }
            })
            .state('dataTable', {

                url: '/dataTable',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'DataTableController',
                        controllerAs: 'vm',
                        title: 'DataTable'
                    },
                    'header@dataTable' : { templateUrl: path_layout + 'navbar.html'},
                    'left@dataTable' : { templateUrl: path_layout + 'navleft.html'},
                    'content@dataTable' : { templateUrl: path_modules + 'datatable/datatable.html'}
                }
            })
            .state('chartType', {
                title: 'Chart',
                url: '/chartType',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'chartTypeController',
                        controllerAs: 'vm'
                    },
                    'header@chartType' : { templateUrl: path_layout + 'navbar.html'},
                    'left@chartType' : { templateUrl: path_layout + 'navleft.html'},
                    'content@chartType' : { templateUrl: path_modules + 'chart/chart.html'}
                }
            })
            .state('chartGauge', {
                title: 'Chart Gauge',
                url: '/chartGauge',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'chartGaugeController',
                        controllerAs: 'vm'
                    },
                    'header@chartGauge' : { templateUrl: path_layout + 'navbar.html'},
                    'left@chartGauge' : { templateUrl: path_layout + 'navleft.html'},
                    'content@chartGauge' : { templateUrl: path_modules + 'chart/chart.html'}
                }
            })
            .state('profile', {
                title: 'Profile',
                url: '/profile',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'ProfileController',
                        controllerAs: 'vm'
                    },
                    'header@profile' : { templateUrl: path_layout + 'navbar.html'},
                    'left@profile' : { templateUrl: path_layout + 'navleft.html'},
                    'content@profile' : { templateUrl: path_modules + 'account/profile.html'}
                }
            })
            .state('addPost', {
                title: 'Add Post',
                url: '/addPost',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'addPostController',
                        controllerAs: 'vm'
                    },
                    'header@addPost' : { templateUrl: path_layout + 'navbar.html'},
                    'left@addPost' : { templateUrl: path_layout + 'navleft.html'},
                    'content@addPost' : { templateUrl: path_modules + 'post/add_post.html'}
                }
            })
            .state('editPost', {
                title: 'Edit Post',
                url: '/editPost/{id:int}',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'editPostController',
                        controllerAs: 'vm'
                    },
                    'header@editPost' : { templateUrl: path_layout + 'navbar.html'},
                    'left@editPost' : { templateUrl: path_layout + 'navleft.html'},
                    'content@editPost' : { templateUrl: path_modules + 'post/add_post.html'}
                }
            })
            .state('listPost', {
                title: 'List Post',
                url: '/listPost',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'listPostController',
                        controllerAs: 'vm'
                    },
                    'header@listPost' : { templateUrl: path_layout + 'navbar.html'},
                    'left@listPost' : { templateUrl: path_layout + 'navleft.html'},
                    'content@listPost' : { templateUrl: path_modules + 'post/list_post.html'}
                }
            })
            .state('addImage', {
                title: 'Add Image',
                url: '/addImage',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'addImageController',
                        controllerAs: 'vm'
                    },
                    'header@addImage' : { templateUrl: path_layout + 'navbar.html'},
                    'left@addImage' : { templateUrl: path_layout + 'navleft.html'},
                    'content@addImage' : { templateUrl: path_modules + 'image/add_image.html'}
                }
            })
            .state('editImage', {
                title: 'Edit Image',
                url: '/editImage/{id:int}',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'editImageController',
                        controllerAs: 'vm'
                    },
                    'header@editImage' : { templateUrl: path_layout + 'navbar.html'},
                    'left@editImage' : { templateUrl: path_layout + 'navleft.html'},
                    'content@editImage' : { templateUrl: path_modules + 'image/add_image.html'}
                }
            })
            .state('listImage', {
                title: 'List Image',
                url: '/listImage',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'index.html',
                        controller: 'listImageController',
                        controllerAs: 'vm'
                    },
                    'header@listImage' : { templateUrl: path_layout + 'navbar.html'},
                    'left@listImage' : { templateUrl: path_layout + 'navleft.html'},
                    'content@listImage' : { templateUrl: path_modules + 'image/list_image.html'}
                }
            })
            .state('login', {
                title: 'Login',
                url: '/login',
                views: {
                    '@' : {
                        templateUrl: path_layout + 'login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    },
                    'content@login' : { templateUrl: path_modules + 'account/login.html'}
                }
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({enabled: true,requireBase: false});

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
