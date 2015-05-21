'use strict';

angular
    .module('myproject')
    .controller('addPostController',addPostController)
    .controller('editPostController',editPostController)
    .controller('listPostController',listPostController)
;

function addPostController($scope, fileUpload){
    var vm = this;
    vm.titlepage = 'Add Post';
    vm.btnSubmit = 'Add Post';

    vm.update = function(){
        //var content = $('#content').val();
        //console.log('object: ' + obj.title + ',' + content);
    };

    /*begin upload file*/

    vm.file_changed  = function (e) {
        $scope.$apply(function(scope) {
            var photofile = e.files[0];
            console.log('files: ' + photofile);
            fileUpload.uploadFileToUrl({
                files: photofile,
                url: './src/assets/upload'
            })
            var reader = new FileReader();
            reader.onload = function() {

            };
            reader.readAsDataURL(photofile);
        });

        //var files = files;
        console.log('files: ' + files);
        fileUpload.uploadFileToUrl({
            files: files,
            url: './src/assets/upload'
        });
    };

    /*end upload file*/
}

function editPostController(){
    var vm = this;
    vm.titlepage = 'Edit Post';
    vm.btnSubmit = 'Update Post';

}

function listPostController(){
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
        if(vm.checkAll === 'Check All'){
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

    vm.deleteItem = function(){
        //console.log('id: ' + id);
    };

    vm.deleteAllItem = function(){

    };
}
