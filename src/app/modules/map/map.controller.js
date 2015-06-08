/**
 * Created by Coder on 6/8/2015.
 */
'use strict';

angular
    .module('myproject')
    .controller('mapController',mapController)
;

function mapController($scope, $http){
    var vm = this;
    vm.titlepage = 'Map';
    vm.address = '1600 Pennsylvania Avenue NW, Washington, D.C. 20500';
    var pos = L.GeoIP.getPosition();
    angular.extend($scope,{
        center:{
            lat:pos.lat,
            lng:pos.lng,
            zoom:44
        }
    })
    L.GeoSearch.Provider.Google.GetLocations('Amsterdam', function(data){
        console.log(data);
    });

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
    /*var test = leafletData.getMap().then(function(map) {
        //L.GeoIP.centerMapOnPosition(map, 15);
        L.Marker.getLatLng();
    });
    console.log(test);*/
}
function getLatLng($scope, $http, address){
    var url = '';
    url += 'http://maps.google.com/maps/api/geocode/json?address=';
    url += address;
    url += '&sensor=false';
    $http.get(url).success(function(mapData) {
        return mapData;
        //angular.extend($scope, mapData);
    });
}