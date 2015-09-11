'use strict';

angular.module('chuanliApp')
  .controller('GalleryCtrl', function ($scope, $stateParams) {
    // Set of Photos
    $scope.photo = {
      'EVENT－APAX':  'assets/gallery/EVENT－APAX.jpg',
      'EVENT－APAX-Production':'assets/gallery/EVENT－APAX-Production.jpg',
      'RECREATION－Discovery':  'assets/gallery/RECREATION－Discovery.jpg'
    }[$stateParams.cate];

    $scope.return = function(e) {
      e.preventDefault();
      history.back();
    };
  });
