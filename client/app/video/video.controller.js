'use strict';

angular.module('chuanliApp')
  .controller('VideoCtrl', function ($scope, $stateParams) {
    var file = $stateParams.name;

    $scope.$on('video-ready', function(d, data) {
      $scope.$broadcast('add-source', {type: 'mp4', src: 'assets/videos/'+ file});
    });

    $scope.$on("$destroy", function() {
      // video.pause();
    });

    $scope.return = function(e) {
      e.preventDefault();
      history.back();
    };
  });
