'use strict';
function addPostCtrl(){
    var vm = this;
    vm.titlepage = 'Add Post';

    vm.update = function(obj){
        var content = $('#content').val();
        console.log('object: ' + obj.title + ',' + content);
    };
}

function listPostCtrl($scope){
    var vm = this;
    vm.titlepage = 'List Post';

    var dishes = [
        'noodles',
        'sausage',
        'beans on toast',
        'cheeseburger',
        'battered mars bar',
        'crisp butty',
        'yorkshire pudding',
        'wiener schnitzel',
        'sauerkraut mit ei',
        'salad',
        'onion soup',
        'bak choi',
        'avacado maki'
    ];
    var sides = [
        'with chips',
        'a la king',
        'drizzled with cheese sauce',
        'with a side salad',
        'on toast',
        'with ketchup',
        'on a bed of cabbage',
        'wrapped in streaky bacon',
        'on a stick with cheese',
        'in pitta bread'
    ];
    var list_meals = [];
    for (var i = 1; i <= 100; i++) {
        var dish = dishes[Math.floor(Math.random() * dishes.length)];
        var side = sides[Math.floor(Math.random() * sides.length)];
        list_meals.push({key: i, content: 'meal ' + i + ': ' + dish + ' ' + side});
    }
    vm.items = list_meals;
}
angular.module('myproject')
    .controller('addPostCtrl',addPostCtrl)
    .controller('listPostCtrl',listPostCtrl);
