'use strict';
function ChartCtrl(){
    var vm = this;
    vm.title = 'Chart';

    vm.showGraph= function() {
        c3.generate({
            bindto: '#viewChart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ]
            }
        });
    }
}
angular.module('myproject')
    .controller('ChartCtrl',ChartCtrl);
