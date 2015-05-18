'use strict';
function addPostCtrl(){
    var vm = this;
    vm.titlepage = 'Add Post';

    vm.update = function(obj){
        var content = $('#content').val();
        console.log('object: ' + obj.title + ',' + content);
    };
}

function listPostCtrl(){
    var vm = this;
    vm.titlepage = 'List Post';
}
angular.module('myproject')
    .controller('addPostCtrl',addPostCtrl)
    .controller('listPostCtrl',listPostCtrl);
