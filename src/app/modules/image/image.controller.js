'use strict';
function addImageCtrl($scope, FileUploader){
    var vm = this;
    vm.titlepage = 'Add Image';
    vm.btnSubmit = 'Add Image';

    var uploader = $scope.uploader = new FileUploader({
        url: 'http://example.dev/angular-file-upload-master/examples/simple/upload.php'
    });
    console.log('uploader: ' + uploader)
    // FILTERS

    uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };

    console.info('uploader', uploader);

    /*end upload file*/
}

function editImageCtrl(){
    var vm = this;
    vm.titlepage = 'Edit Image';
    vm.btnSubmit = 'Update Image';

}

function listImageCtrl(){

}
angular.module('myproject')
    .controller('addImageCtrl',addImageCtrl)
    .controller('editImageCtrl',editImageCtrl)
    .controller('listImageCtrl',listImageCtrl)
;
