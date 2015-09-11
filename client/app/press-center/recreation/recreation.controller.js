'use strict';

angular.module('chuanliApp')
  .controller('PcRecreationCtrl', function ($scope, DownloadModal) {
    $scope.datas = [
      {
        year: '2015',
        archives: [
        {title: 'DISCOVERY ADVENTURES',url: '#'},
        {title: 'SHANGHAI FASHION WEEK',url: '#'},
        {title: 'IMMORTAL VAN GOGH',url: '#'}
        ]
      },
      {
        year: '2014',
        archives: [
          {title: 'DISCOVERY ADVENTURES',url: '#'},
          {title: 'SHANGHAI FASHION WEEK',url: '#'},
          {title: 'IMMORTAL VAN GOGH',url: '#'}
        ]
      }
    ];

    $scope.leaveMsg = function(url) {
      DownloadModal.show();
    }
  });
