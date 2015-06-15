/**
 * Created by Coder on 6/8/2015.
 */
'use strict';

angular
    .module('myproject')
    .controller('googleMapController',googleMapController)
;

function googleMapController($scope){
    var vm = this;
    vm.titlepage = 'Google Map';
    vm.from = 'Thành Thái, Quận 10, Hồ Chí Minh, Vietnam';
    vm.to = '97/14 Âu Cơ, phường 9, Tân Bình, Hồ Chí Minh, Vietnam';
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };

    var events = {
        places_changed: function (searchBox) {}
    }
    $scope.searchbox = { template:'searchbox.tpl.html', events:events};

    $scope.marker = {
        id: 0,
        coords: {
            latitude: 40.1451,
            longitude: -99.6680
        },
        options: { draggable: true },
        events: {
            dragend: function (marker, eventName, args) {
                $log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $log.log(lat);
                $log.log(lon);

                $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                };
            }
        }
    };
}