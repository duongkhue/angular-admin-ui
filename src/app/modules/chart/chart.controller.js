'use strict';

angular
    .module('myproject')
    .controller('chartLineController',chartLineController)
    .controller('chartStepController',chartStepController);

function chartStepController(){
    var vm = this;
    vm.title = 'Chart Step';

    vm.showChart= function() {
        c3.generate({
            bindto: '#viewChart',
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 100],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'step',
                    data2: 'area-step'
                }
            }
        });
    }
}

function chartLineController(){
    var vm = this;
    vm.title = 'Chart Line';

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