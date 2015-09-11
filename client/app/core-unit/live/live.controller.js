'use strict';

angular.module('chuanliApp')
  .controller('CuLiveCtrl', function ($scope) {
    $scope.$on('$stateChangeStart', function(){
      $scope.page2 = false;
    });
  });
