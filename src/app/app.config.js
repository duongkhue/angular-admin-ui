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
        'angularUtils.directives.dirPagination',
        'datatables',
        'satellizer',
        'leaflet-directive'
        ])
    .constant('config',{
        PATH_LAYOUT: './app/layout/',
        PATH_MODULES: './app/modules/',
        LINK_SERVER: 'http://auth.dev/'
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $authProvider, config) {
        
        /*begin config authentication*/
        $authProvider.withCredentials = false;
        $authProvider.baseUrl = ''; // API Base URL for the paths below.
        $authProvider.loginUrl = config.LINK_SERVER + 'login.php';
        $authProvider.facebook({
            clientId: '1599615690280071',
            url: config.LINK_SERVER + 'facebook.php'
        });

        $authProvider.google({
            clientId: '48885658359-791rlan9bdhuq9omjg9tbkva1f3hkovq.apps.googleusercontent.com',
            url: config.LINK_SERVER + 'google.php'
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
            url: config.LINK_SERVER + 'twitter.php'
            //url: '/auth/twitter'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: 'htpp://localhost:8000/auth....',
            //redirectUri: window.location.origin,
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });

        /*end config authentication*/

        $stateProvider
            .state('home', {

                url: '/',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'IndexController',
                        controllerAs: 'vm',
                        title: 'Home'
                    },
                    'header@home' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@home' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@home' : { templateUrl: config.PATH_MODULES + 'index.html'}
                }
            })
            .state('dataTable', {

                url: '/dataTable',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'DataTableController',
                        controllerAs: 'vm',
                        title: 'DataTable'
                    },
                    'header@dataTable' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@dataTable' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@dataTable' : { templateUrl: config.PATH_MODULES + 'datatable/datatable.html'}
                }
            })
            .state('chartType', {
                title: 'Chart',
                url: '/chartType',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'chartTypeController',
                        controllerAs: 'vm'
                    },
                    'header@chartType' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@chartType' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@chartType' : { templateUrl: config.PATH_MODULES + 'chart/chart.html'}
                }
            })
            .state('chartGauge', {
                title: 'Chart Gauge',
                url: '/chartGauge',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'chartGaugeController',
                        controllerAs: 'vm'
                    },
                    'header@chartGauge' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@chartGauge' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@chartGauge' : { templateUrl: config.PATH_MODULES + 'chart/chart.html'}
                }
            })
            .state('profile', {
                title: 'Profile',
                url: '/profile',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'ProfileController',
                        controllerAs: 'vm'
                    },
                    'header@profile' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@profile' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@profile' : { templateUrl: config.PATH_MODULES + 'account/profile.html'}
                }
            })
            .state('addPost', {
                title: 'Add Post',
                url: '/addPost',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'addPostController',
                        controllerAs: 'vm'
                    },
                    'header@addPost' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@addPost' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@addPost' : { templateUrl: config.PATH_MODULES + 'post/add_post.html'}
                }
            })
            .state('editPost', {
                title: 'Edit Post',
                url: '/editPost/{id:int}',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'editPostController',
                        controllerAs: 'vm'
                    },
                    'header@editPost' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@editPost' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@editPost' : { templateUrl: config.PATH_MODULES + 'post/add_post.html'}
                }
            })
            .state('listPost', {
                title: 'List Post',
                url: '/listPost',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'listPostController',
                        controllerAs: 'vm'
                    },
                    'header@listPost' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@listPost' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@listPost' : { templateUrl: config.PATH_MODULES + 'post/list_post.html'}
                }
            })
            .state('addImage', {
                title: 'Add Image',
                url: '/addImage',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'addImageController',
                        controllerAs: 'vm'
                    },
                    'header@addImage' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@addImage' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@addImage' : { templateUrl: config.PATH_MODULES + 'image/add_image.html'}
                }
            })
            .state('editImage', {
                title: 'Edit Image',
                url: '/editImage/{id:int}',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'editImageController',
                        controllerAs: 'vm'
                    },
                    'header@editImage' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@editImage' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@editImage' : { templateUrl: config.PATH_MODULES + 'image/add_image.html'}
                }
            })
            .state('listImage', {
                title: 'List Image',
                url: '/listImage',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'listImageController',
                        controllerAs: 'vm'
                    },
                    'header@listImage' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@listImage' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@listImage' : { templateUrl: config.PATH_MODULES + 'image/list_image.html'}
                }
            })
            .state('login', {
                title: 'Login',
                url: '/login',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    },
                    'content@login' : { templateUrl: config.PATH_MODULES + 'account/login.html'}
                }
            })
            .state('map', {
                title: 'Map',
                url: '/map',
                views: {
                    '@' : {
                        templateUrl: config.PATH_LAYOUT + 'index.html',
                        controller: 'mapController',
                        controllerAs: 'vm'
                    },
                    'header@map' : { templateUrl: config.PATH_LAYOUT + 'navbar.html'},
                    'left@map' : { templateUrl: config.PATH_LAYOUT + 'navleft.html'},
                    'content@map' : { templateUrl: config.PATH_MODULES + 'map/map.html'}
                }
            })
            .state('logout', {
                url: '/logout',
                controller: 'LogoutController'
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

    .run(function($rootScope, $location, $state, $auth) {

        $rootScope.$on( '$stateChangeStart', function(e, toState) {
            var isLogin = toState.name === 'login';
            currentPage = toState.name;
            if(isLogin){
                return; // no need to redirect
            }

            // now, redirect only not authenticated

            var token = $auth.getToken();
            //console.log('token:' + token);
            if(!token) {
                e.preventDefault(); // stop current execution
                $state.go('login'); // go to login
            } else{
                $location.path('/');
            }
        });
    });
