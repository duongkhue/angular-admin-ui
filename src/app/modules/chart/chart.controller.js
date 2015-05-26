'use strict';

angular
    .module('myproject')
    .controller('chartTypeController',ChartTypeController)
    .controller('chartGaugeController',chartGaugeController);


function ChartTypeController() {
    var vm = this;
    vm.title = 'Chart Type';
    vm.chartOptions = true;
    var params = [];

    vm.submit = function (obj) {
        var IsShowY2 = false;
        var hidePoint = true;
        var isHideTooltip = true;
        var isGrouped = true;
        if (obj.Grouped) {
            isGrouped = false;
        }
        if (obj.isHidePoint) {
            hidePoint = false;
        }
        if (obj.hideTooltip) {
            isHideTooltip = false;
        }
        if (obj.nameCol2) {
            IsShowY2 = true;
        }


        params = obj;
        params.IsShowY2 = IsShowY2;
        params.hidePoint = hidePoint;
        params.isGrouped = isGrouped;
        params.isHideTooltip = isHideTooltip;

        var chart = drawChart(params);

        if (obj.typeChart) {
            chart.transform(obj.typeChart);
        }
    };

    vm.showChart = function () {
        params.nameCol1 = 'item1';
        params.nameCol2 = 'item2';
        drawChart(params);
    };

    function drawChart(obj) {
        return c3.generate({
            bindto: '#viewChart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                names: {
                    data1: 'item1',
                    data2: 'item2'
                },
                axes: {
                    data1: 'y',
                    data2: 'y2'
                },
                labels: true
            },
            color: {
                pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            },
            axis: {
                y: {
                    label: obj.nameCol1
                },
                y2: {
                    show: obj.IsShowY2,
                    label: obj.nameCol2
                }
            },
            point: {
                show: obj.hidePoint
            },
            size: {
                height: obj.heightChart,
                width: obj.widthChart
            },
            tooltip: {
                show: obj.isHideTooltip,
                grouped: obj.isGrouped
            }
        });
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
