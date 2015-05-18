'use strict';
function addPostCtrl(){
    var vm = this;
    vm.titlepage = 'Add Post';
    vm.btnSubmit = 'Add Post';

    vm.update = function(obj){
        var content = $('#content').val();
        console.log('object: ' + obj.title + ',' + content);
    };
}

function editPostCtrl(){
    var vm = this;
    vm.titlepage = 'Edit Post';
    vm.btnSubmit = 'Update Post';

}

function listPostCtrl($scope){
    var vm = this;
    vm.titlepage = 'List Post';
    vm.checkAll = 'Check All';
    /*begin get list post*/
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
    /*end get list post*/

    /*begin handle button check all*/
    vm.selectedAll = function() {
        if(vm.checkAll == 'Check All'){
            angular.forEach(vm.items, function (item) {
                item.checked = true;
            });
            vm.checkAll = 'Uncheck All';
        } else {
            angular.forEach(vm.items, function (item) {
                item.checked = false;
            });
            vm.checkAll = 'Check All';
        }

    };
    /*end handle button check all*/

    vm.deleteItem = function(id){
        console.log('id: ' + id);
    }

    vm.deleteAllItem = function(){

    }
}
angular.module('myproject')
    .controller('addPostCtrl',addPostCtrl)
    .controller('editPostCtrl',editPostCtrl)
    .controller('listPostCtrl',listPostCtrl)
;
