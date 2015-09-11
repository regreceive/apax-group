'use strict';

angular.module('chuanliApp')
  .controller('ContactUsCtrl', function ($scope, $timeout) {
    $scope.showQRCode = false;

    var timer;
    $scope.lazyOut = function() {
      $timeout.cancel(timer);
      timer = $timeout(function() {
        $scope.showQRCode = false;
      }, 1000);
    };

    $scope.rushIn = function() {
      $timeout.cancel(timer);
      timer = $timeout(function() {
        $scope.showQRCode = true;
      }, 200);
    }
  });
