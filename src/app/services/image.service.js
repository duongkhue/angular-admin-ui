'use strict';

angular
    .module('myproject')
    .service('fileUpload', fileUpload);

    fileUpload.$inject = ['$http'];
    function fileUpload ($http){
        this.uploadFileToUrl = function(files, uploadUrl){

            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    move_uploaded_file(file["tmp_name"],uploadUrl + file['name']);
                }
                return true;
            }
            else{
                return false;
            }
        }
    }
