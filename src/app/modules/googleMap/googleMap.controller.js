/**
 * Created by Coder on 6/8/2015.
 */
'use strict';

angular
    .module('myproject')
    .controller('googleMapController',googleMapController)
;

function googleMapController(){
    var vm = this;
    vm.titlepage = 'Google Map';
    vm.from = 'Thành Thái, Quận 10, Hồ Chí Minh, Vietnam';
    vm.to = '97/14 Âu Cơ, phường 9, Tân Bình, Hồ Chí Minh, Vietnam';

    var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
    var directionsService = new google.maps.DirectionsService();
    var map;
    var myLatlng = new google.maps.LatLng(35.270, -80.837)

    $(window).load(function() {
        var myOptions = {
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: myLatlng
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });
        directionsDisplay.setMap(map);

        $("#routeMode").on("change", function() { calcRoute(); });
        vm.search = function(){
            if(vm.from){
                if(vm.from && vm.to){
                    calcRoute();
                    return;
                }
                getLatLng(vm.from,function(data){
                    var myLatlng = new google.maps.LatLng(data['latitude'], data['longitude']);
                    var myOptions = {
                        zoom: 20,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        center: myLatlng
                    };
                    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                    new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        title: 'Hello World!'
                    });
                    directionsDisplay.setMap(map);
                });
            }
        }
    });
    function calcRoute() {
        var request = {
            origin: vm.from,
            destination: vm.to,
            travelMode: google.maps.TravelMode[$("#routeMode").val()]
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }



    /*var events = {
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
    };*/

    /*$scope.marker = {
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
    };*/

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