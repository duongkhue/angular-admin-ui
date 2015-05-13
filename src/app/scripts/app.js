'use strict';

angular.module('myproject', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/index.html',
            controller: 'IndexCtrl'
        })
        .state('chart', {
            url: '/chart',
            templateUrl: 'app/views/chart.html',
            controller: 'ChartCtrl'
        });

    $urlRouterProvider.otherwise('/');
  })
;
