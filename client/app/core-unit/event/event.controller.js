'use strict';

angular.module('chuanliApp')
  .controller('CuEventCtrl', function ($scope) {
    $scope.$on('$stateChangeStart', function(){
      $scope.page2 = false;
    });
  });
