angular.module('chuanliApp')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('tab.press-center-event', {
        url: '/press-center/event',
        views: {
          'tab': {
            templateUrl: 'app/press-center/event/event.html',
            controller: 'PcEventCtrl'
          }
        }
      })

      .state('tab.press-center-live', {
        url: '/press-center/live',
        views: {
          'tab': {
            templateUrl: 'app/press-center/live/live.html',
            controller: 'PcLiveCtrl'
          }
        }
      })

      .state('tab.press-center-recreation', {
        url: '/press-center/recreation',
        views: {
          'tab': {
            templateUrl: 'app/press-center/recreation/recreation.html',
            controller: 'PcRecreationCtrl'
          }
        }
      });
  });
