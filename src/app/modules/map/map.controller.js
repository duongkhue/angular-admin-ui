/**
 * Created by Coder on 6/8/2015.
 */
'use strict';

angular
    .module('myproject')
    .controller('mapController',mapController)
;

function mapController($scope, $http, leafletData){
    var vm = this;
    vm.titlepage = 'Map';
    vm.address = '1600 Pennsylvania Avenue NW, Washington, D.C. 20500';
    angular.extend($scope, {
        center: {
            autoDiscover: true,
            zoom: 20
        },
        controls: {
            draw: {}
        },
        layers: {
            baselayers: {
                googleTerrain: {
                    name: 'Google Terrain',
                    layerType: 'TERRAIN',
                    type: 'google'
                },
                googleHybrid: {
                    name: 'Google Hybrid',
                    layerType: 'HYBRID',
                    type: 'google'
                },
                googleRoadmap: {
                    name: 'Google Streets',
                    layerType: 'ROADMAP',
                    type: 'google'
                }
            }
        }
    });
    leafletData.getMap().then(function(map) {
        var drawnItems = $scope.controls.edit.featureGroup;
        map.on('draw:created', function (e) {
            var layer = e.layer;
            drawnItems.addLayer(layer);
            console.log(JSON.stringify(layer.toGeoJSON()));
        });
    });



    //var pos = L.GeoIP.getPosition();
    /*
    $scope.setRegion = function(region) {
        if (!region) {
            $scope.maxbounds = {};
        } else {
            $scope.maxbounds = regions[region];
        }
    };*/
    /*angular.extend($scope,{
        center:{
            lat: 52.52,
            lng: 13.40,
            zoom: 14
        },
        controls: {
            draw: {}
        },
        layers: {
            baselayers: {
                mapbox_light: {
                    name: 'Mapbox Light',
                    url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    layerOptions: {
                        apikey: 'pk.eyJ1IjoiYnVmYW51dm9scyIsImEiOiJLSURpX0pnIn0.2_9NrLz1U9bpwMQBhVk97Q',
                        mapid: 'bufanuvols.lia22g09'
                    }
                },
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
                //Google:L.Google()
            }
        },
        markers:{
            m1: {
                lat: 52.52,
                lng: 13.40,
                draggable: true,
                title:'test'
            }
        }
    });

    leafletData.getMap().then(function(map) {
        var drawnItems = $scope.controls.edit.featureGroup;
        map.on('draw:created', function (e) {
            var layer = e.layer;
            drawnItems.addLayer(layer);
            console.log(JSON.stringify(layer.toGeoJSON()));
        });
    });
    vm.findMe = function(){
        angular.extend($scope, {
            center: {
                autoDiscover: true
            }
        });
    }*/
    /*L.GeoSearch.Provider.Google.GetLocations('Amsterdam', function(data){
        console.log(data);
    });*/

    /*vm.searchIP = function(obj){
        var googleGeocodeProvider = new L.GeoSearch.Provider.Google(),
            addressText = 'Amsterdam';

        googleGeocodeProvider.GetLocations( addressText, function ( data ) {
            // in data are your results with x, y, label and bounds (currently availabel for google maps provider only)
        });
        $scope.latitude = null;
        $scope.longitude = null;
        geocoderService.getLatLong(obj.address).then(function(latlng){
            angular.extend($scope,{
                center:{
                    lat:$scope.latitude,
                    lng:$scope.longitude,
                    zoom:44
                }
            })
        }, function(){
            $scope.geocodeError = true;
        }).finally(function(){
            $scope.isFinished = true;
        });
        console.log('latitude: ' + $scope.latitude + ', longitude: ' + $scope.longitude);
    }*/
}