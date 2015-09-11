angular.module('chuanliApp')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('tab.core-unit-event', {
        url: '/core-unit/event',
        views: {
          'tab': {
            templateUrl: 'app/core-unit/event/event.html',
            controller: 'CuEventCtrl'
          }
        }
      })

      .state('tab.core-unit-live', {
        url: '/core-unit/live',
        views: {
          'tab': {
            templateUrl: 'app/core-unit/live/live.html'
          }
        }
      })

      .state('tab.core-unit-recreation', {
        url: '/core-unit/recreation',
        views: {
          'tab': {
            templateUrl: 'app/core-unit/recreation/recreation.html'
          }
        }
      });
  });
