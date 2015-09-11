'use strict';

angular.module('chuanliApp')
  .controller('MainCtrl', function ($scope, $location, $timeout) {
    $scope.loadPercent = 0;

    $scope.goToTab = function() {
      if ($scope.loadPercent >= 100) {
        $location.path('/tab/core-unit');
      }
    };

    var loadFn = function() {
      Math.random() > 0.6 ? $scope.loadPercent++ : null;
      if ($scope.loadPercent < 100) {
        $timeout(loadFn, 1000 / 40);
      }
    };
    loadFn();
  });
