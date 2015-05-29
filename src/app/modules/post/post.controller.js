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

function listPostController($scope, $compile, $location, $resource, DTOptionsBuilder, DTColumnBuilder){
    var vm = this;
    vm.titlepage = 'List Post';
    vm.checkAll = 'Check All';
    /*begin get list post*/
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;

    var titleHtml = '<input type="checkbox" ng-model="showCase.selectAll" ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)">';

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        return $resource('http://localhost:3000/data.json').query().$promise;
    })
        .withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withOption('headerCallback', function(header) {
            if (!$scope.headerCompiled) {
                // Use this headerCompiled field to only compile header once
                $scope.headerCompiled = true;
                $compile(angular.element(header).contents())($scope);
            }
        })
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)">';
            }),
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(function(data){
            var strButton = '';
            strButton += '<button type="button" ng-click="showCase.modifyItem(' + data.id + ')" class="btn btn-warning"><i class="glyphicon glyphicon-edit"></i></button>&nbsp;&nbsp;';
            strButton += '<button type="button" ng-click="showCase.removeItem(' + data.id + ')" class="btn btn-danger"><i class="glyphicon glyphicon-trash"></i></button>';
            return strButton;
        })
    ];

    /*function addPerson() {
        vm.persons.push(angular.copy(vm.person2Add));
        vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }*/
    vm.modifyItem = function(index) {
        $location.path('/editPost/'+ index);
    }
    function removeItem(index) {
        vm.dtOptions.splice(index, 1);
    }

    function toggleAll (selectAll, selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                selectedItems[id] = selectAll;
            }
        }
    }
    function toggleOne (selectedItems) {
        var me = this;
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                if(!selectedItems[id]) {
                    me.selectAll = false;
                    return;
                }
            }
        }
        me.selectAll = true;
    }


    /*var dishes = [
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
    vm.items = list_meals;*/
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
