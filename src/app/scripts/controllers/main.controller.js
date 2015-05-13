'use strict';

angular.module('myproject')
  .controller('MainCtrl', function ($scope) {

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
