'use strict';

angular.module('chuanliApp')
  .factory('DownloadModal', function ($rootScope, $ionicModal) {
    var modal;
    var $scope = $rootScope.$new();

    $ionicModal.fromTemplateUrl('components/modal/modal.html', {
      scope: $scope
    }).then(function(md) {
      modal = md;
    });

    $rootScope.$on('$stateChangeStart', function(event, next, toP, from) {
      modal.isShown() && modal.hide();
    });

    $scope.hide = function() {
      modal.hide();
    };

    // Public API here
    return {
      show: function() {
        modal.show();
      }
    };
  });
