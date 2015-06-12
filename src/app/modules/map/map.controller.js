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


    leafletData.getMap('viewMap').then(function(map) {
        //L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //}).addTo(map);

        var searchControl = new L.esri.Geocoding.Controls.Geosearch().addTo(map);

        var results = new L.LayerGroup().addTo(map);

        searchControl.on('results', function(data){
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
                results.addLayer(L.marker(data.results[i].latlng));
            }
        });
        map.addControl( new L.Control.Compass() );

        L.Routing.control({
            waypoints: [
                L.latLng(57.74, 11.94),
                L.latLng(57.6792, 11.949)
            ],
            geocoder: L.Control.Geocoder.nominatim(),
            routeWhileDragging: true,
            reverseWaypoints: true
        }).addTo(map);
    })
    angular.extend($scope, {
        center: {
            lat: 41.85,
            lng: -87.65,
            zoom: 8
        },
        markers: {
            m1: {
                lat: 41.85,
                lng: -87.65,
                message: "I'm a static marker with defaultIcon",
                focus: false,
                icon: {}
            }
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
        getLatLng(function(data){
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
    function getLatLng(callback){
        var arr = [];
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': vm.address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                arr['latitude'] = results[0].geometry.location.lat();
                arr['longitude'] = results[0].geometry.location.lng();
                callback(arr);
            }
        });
    }
}