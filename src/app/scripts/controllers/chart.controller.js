'use strict';

angular.module('myproject')
  .controller('ChartCtrl', function ($scope) {
        $scope.title = 'Chart';
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        });
  });
