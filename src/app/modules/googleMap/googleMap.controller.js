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
    $scope.map = {center: {latitude: 10.7741854, longitude: 106.66446129999997 }, zoom: 15 };
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 10.7741854,
            longitude: 106.66446129999997
        }
    }
    var events = {
        places_changed: function (searchBox) {
            var places = searchBox.getPlaces()

            if (places.length == 0) {
                return;
            }
            // For each place, get the icon, place name, and location.
            var newMarkers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
                // Create a marker for each place.
                var marker = {
                    id:i,
                    place_id: place.place_id,
                    name: place.name,
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng(),
                    options: {
                        visible:false
                    },
                    templateurl:'window.tpl.html',
                    templateparameter: place
                };
                newMarkers.push(marker);

                bounds.extend(place.geometry.location);
            }

            $scope.map.bounds = {
                northeast: {
                    latitude: bounds.getNorthEast().lat(),
                    longitude: bounds.getNorthEast().lng()
                },
                southwest: {
                    latitude: bounds.getSouthWest().lat(),
                    longitude: bounds.getSouthWest().lng()
                }
            }

            _.each(newMarkers, function(marker) {
                marker.closeClick = function() {
                    $scope.selected.options.visible = false;
                    marker.options.visble = false;
                    return $scope.$apply();
                };
                marker.onClicked = function() {
                    $scope.selected.options.visible = false;
                    $scope.selected = marker;
                    $scope.selected.options.visible = true;
                };
            });

            $scope.map.markers = newMarkers;

            $scope.map = {center: {latitude: newMarkers[0]['latitude'], longitude: newMarkers[0]['longitude'] }, zoom: 15 };
            $scope.marker = {
                coords: {
                    latitude: newMarkers[0]['latitude'],
                    longitude: newMarkers[0]['longitude']
                }
            }
        }
    }
    $scope.searchbox = {
        template:'searchbox.tpl.html',
        events:events,
        autocomplete:true,
        types: ['(cities)'],
        bounds: {}
    };

    $scope.marker = {
        id: 0,
        coords: {
            latitude: 10.7741854,
            longitude: 106.66446129999997
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
    vm.search = function(obj){
        if(obj.from){
            getLatLng(obj.from, function(data){
                $scope.$apply = function(){
                    $scope.marker = {
                        id: 0,
                        coords: {
                            latitude: data['latitude'],
                            longitude: data['longitude']
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
                    $scope.map = {center: {latitude: data['latitude'], longitude: data['longitude'] }, zoom: 15 , refresh: true};
                }

            });
        }
    }
    function getLatLng(address, callback){
        var arr = [];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                arr['latitude'] = results[0].geometry.location.lat();
                arr['longitude'] = results[0].geometry.location.lng();
                console.log(arr['latitude'] + ', ' + arr['longitude']);
                callback(arr);
            }
        });
    }
}