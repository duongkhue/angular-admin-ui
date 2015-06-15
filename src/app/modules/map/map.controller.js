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
    vm.from = 'Thành Thái, Quận 10, Hồ Chí Minh, Vietnam';
    vm.to = '97/14 Âu Cơ, phường 9, Tân Bình, Hồ Chí Minh, Vietnam';

    /*leafletData.getMap('viewMap').then(function(map) {
        //L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //}).addTo(map);

        //var searchControl = new L.esri.Geocoding.Controls.Geosearch().addTo(map);

        var results = new L.LayerGroup().addTo(map);

        *//*searchControl.on('results', function(data){
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
                results.addLayer(L.marker(data.results[i].latlng));
            }
        });*//*
        map.addControl( new L.Control.Compass() );

        *//*L.Routing.control({
            waypoints: [
                L.latLng(57.74, 11.94),
                L.latLng(57.6792, 11.949)
            ],
            geocoder: L.Control.Geocoder.nominatim(),
            routeWhileDragging: true,
            reverseWaypoints: true
        }).addTo(map);*//*


    })
    angular.extend($scope, {
        center: {
            lat: 52.51,
            lng: 13.37,
            *//*lat: 41.85,
            lng: -87.65,*//*
            zoom: 8
        },
        *//*markers: {
            m1: {
                lat: 41.85,
                lng: -87.65,
                message: "I'm a static marker with defaultIcon",
                focus: false,
                icon: {}
            }
        },*//*
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


    vm.changeIcon = function(){
        var params = [];
        params['lat'] = 41.85;
        params['lng'] = -87.65;
        params['message'] = "I'm a static marker with defaultIcon";
        params['focus'] = false;
        switch(vm.iconMarker){
            case 'leafIcon':
                params['icon'] = {
                    iconUrl : '../app/layout/images/leaf-green.png',
                    shadowUrl: '../app/layout/images/leaf-shadow.png',
                    iconSize: [38, 95],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                }
                createMarker(params);
                break;
            case 'orangeLeafIcon':
                params['icon'] = {
                    iconUrl : '../app/layout/images/leaf-orange.png',
                    shadowUrl: '../app/layout/images/leaf-shadow.png',
                    iconSize: [38, 95],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                }
                createMarker(params);
                break;
            case 'blueAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'tag',
                    color: 'blue'
                }
                createMarker(params);
                break;
            case 'redAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'tag',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'greenAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'tag',
                    color: 'green'
                }
                createMarker(params);
                break;
            case 'tabAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'tag',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'usdAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'usd',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'heartAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'heart',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'homeAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'home',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'cogAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'cog',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'starAwesomeMarkerIcon':
                params['icon'] = {
                    type : 'awesomeMarker',
                    icon: 'star',
                    color: 'red'
                }
                createMarker(params);
                break;
            case 'blueMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'beer',
                    color: '12a',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'redMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'beer',
                    color: 'f00',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'greenMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'beer',
                    color: '0f0',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'purpleMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'beer',
                    color: 'b0b',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'rocketMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'rocket',
                    color: '#f00',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'beerMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'beer',
                    color: '#f00',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'warehouseMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'warehouse',
                    color: '#f00',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'shopMakiMarkerIcon':
                params['icon'] = {
                    type : 'makiMarker',
                    icon: 'shop',
                    color: '12a',
                    size: '1'
                }
                createMarker(params);
                break;
            case 'blueExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'blue-dark',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'redExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'red',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'greenExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'tagExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-tag',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'usdExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-usd',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'heartExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-heart',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'homeExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-home',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'cogExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-cog',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'starExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'certificateExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-certificate',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'squareExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'green',
                    size: '1',
                    shape: 'square',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'starExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'green',
                    size: '1',
                    shape: 'star',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            case 'circleExtraMarkerIcon':
                params['icon'] = {
                    type : 'extraMarker',
                    icon: 'fa-star',
                    color: 'green',
                    size: '1',
                    shape: 'circle',
                    prefix: 'fa'
                }
                createMarker(params);
                break;
            default:
                params['icon'] = {};
                createMarker(params);
                break;
        }
    }

    function createMarker(obj){
        angular.extend($scope,{
            markers:{
                m1:{
                    lat: obj['lat'],
                    lng: obj['lng'],
                    message: obj['message'],
                    focus: obj['focus'],
                    icon: obj['icon']
                }
            }
        });

    }
    vm.findMe = function(){
        angular.extend($scope, {
            center: {
                autoDiscover: true
            }
        });
    }

    vm.searchIP = function(){
        var address = vm.address;
        if(vm.address){
            getLatLng(vm.address, function(data){
                console.log(data['latitude'] + ', ' + data['longitude']);
                angular.extend($scope,{
                    markers:{
                        m1:{
                            lat: data['latitude'],
                            lng: data['longitude'],
                            message: vm.address,
                            focus: false,
                            icon: {}
                        }
                    },
                    center: {
                        lat: data['latitude'],
                        lng: data['longitude'],
                        zoom: 18
                    }
                });
            });
        }
        if(vm.from && vm.to){

            leafletData.getMap().then(function(map) {
                var sourceMarker1;
                var targetMarker1;
                *//*map.removeLayer(targetMarker1);
                map.removeLayer(sourceMarker1);*//*


                // set the service key, this is a demo key
                // please contact us and request your own key
                r360.config.serviceKey = 'YWtKiQB7MiZETbCoVsG6';

                // create a target marker icon to be able to distingush source and targets
                var redIcon = L.icon({iconUrl: './bower_components/route360/lib/leaflet/images/marker-icon-red.png',
                    shadowUrl: './bower_components/route360/lib/leaflet/images/marker-shadow.png', iconAnchor: [12,45], popupAnchor:  [0, -35] });

                getLatLng(vm.from, function(dataFrom) {
                    console.log('latitude: ' + dataFrom['latitude']+ ', ' + dataFrom['longitude']);
                    var latlonsFrom = [dataFrom['latitude'],dataFrom['longitude']];

                    getLatLng(vm.to, function(dataTo) {
                        *//*var latlons = {
                            src1 : [10.7731854, 106.66446129999997],
                            trg1 : [10.7726089, 106.6518509]
                        };*//*
                        //console.log(dataFrom['latitude'] + ', ' + dataForm['longitude']);
                        //console.log(dataTo['latitude'] + ', ' + dataTo['longitude']);
                        var latlonsTo = [dataTo['latitude'],dataTo['longitude']];
                        console.log('latitude: ' + dataTo['latitude']+ ', ' + dataTo['longitude']);

                        angular.extend($scope, {
                            center: {
                                *//*lat: latlons.src1,
                                lng: latlons.trg1,*//*
                                lat: dataFrom['latitude'],
                                lng: dataFrom['longitude'],
                                *//*lat: 41.85,
                                 leaflet-zoom-animated lng: -87.65,*//*
                                zoom: 15
                            }
                        });

                        // create a source and a two target markers and add them to the map
                        sourceMarker1 = L.marker(latlonsFrom).addTo(map);
                        targetMarker1 = L.marker(latlonsTo, {icon:redIcon}).addTo(map);
                        // add a layer in which we will paint the route
                        var routeLayer = L.featureGroup().addTo(map);

                        // you need to define some options for the polygon service
                        // for more travel options check out the other tutorials
                        var travelOptions = r360.travelOptions();
                        // we only have one source which is the marker we just added
                        travelOptions.addSource(sourceMarker1);
                        travelOptions.addTarget(targetMarker1);
                        // set the travel type to transit
                        travelOptions.setTravelType('transit');

                        // start the service
                        r360.RouteService.getRoutes(travelOptions, function(routes){

                            // one route for each source and target combination
                            _.each(routes, function(route){
                                //routeLayer.clearLayers();
                                route.fadeIn(routeLayer, 1000, "travelDistance");
                            });
                        });
                    });


                });


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
                callback(arr);
            }
        });
    }

    function getLatLngRouting(from, to){
        var LatLng = [];
        getLatLng(from,function(data){
            LatLng['From'] = data
        });
        getLatLng(to,function(data){
            LatLng['To'] = data
        });
        return LatLng;
    }*/
}