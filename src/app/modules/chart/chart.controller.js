'use strict';

angular
    .module('myproject')
    .controller('chartTypeController',ChartTypeController)
    .controller('chartGaugeController',chartGaugeController);

function ChartTypeController($scope) {
    var vm = this;
    vm.title = 'Chart Type';
    $scope.chartOptions = true;
    var params = [];

    $scope.dataset = [
        {
            'day': '2013-01-02_00:00:00',
            'sales': 13461.295202,
            'income': 12365.053
        },
        {
            'day': '2013-01-04_00:00:00',
            'sales': 16461.295202,
            'income': 11365.053
        }
    ];
    $scope.options = optionChart(params);

    vm.submit = function () {
        var isHideTooltip = true;
        var isGrouped = true;
        var isHidePoint = true;
        if (vm.isHidePoint){
            isHidePoint = false;
        }
        if (vm.Grouped) {
            isGrouped = false;
        }
        if (vm.hideTooltip) {
            isHideTooltip = false;
        }
        params = vm;
        params['isHideTooltip'] = isHideTooltip;
        params['isGrouped'] = isGrouped;
        params['isHidePoint'] = isHidePoint;
        $scope.options = optionChart(params);
    };

    function optionChart(params) {
        return {
            /*data:{
                groups: [['income']]
            },*/
            rows: [
                {
                    key: 'income',
                    axis:'y2'
                },
                {key: 'sales'}
            ],
            type: params.typeChart,
            yAxis:{
                label: params.nameCol1
            },
            y2Axis:{
                label: params.nameCol2,
                tickOptions: 'income'
            },
            size:{
                width: params.widthChart,
                height: params.heightChart
            },
            tooltip: {
                show: params['isHideTooltip'],
                grouped: params['isGrouped']
            },
            point: {
                show: params['isHidePoint']
            }
        };
    }
}

function chartGaugeController(){
    var vm = this;
    vm.title = 'Chart Gauge';

    vm.chartOptions = false;

    vm.showChart= function() {
        var chart = c3.generate({
            bindto: '#viewChart',
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) {
                    //console.log("onclick", d, i);
                },
                onmouseover: function (d, i) {
                    //console.log("onmouseover", d, i);
                },
                onmouseout: function (d, i) {
                    //console.log("onmouseout", d, i);
                }
            },
            gauge: {
                //        label: {
                //            format: function(value, ratio) {
                //                return value;
                //            },
                //            show: false // to turn off the min/max labels.
                //        },
                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                //    max: 100, // 100 is default
                //    units: ' %',
                //    width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            }
        });

        setTimeout(function () {
            chart.load({
                columns: [['data', 10]]
            });
        }, 1000);

        setTimeout(function () {
            chart.load({
                columns: [['data', 50]]
            });
        }, 2000);

        setTimeout(function () {
            chart.load({
                columns: [['data', 70]]
            });
        }, 3000);

        setTimeout(function () {
            chart.load({
                columns: [['data', 0]]
            });
        }, 4000);

        setTimeout(function () {
            chart.load({
                columns: [['data', 100]]
            });
        }, 5000);
    }
}
