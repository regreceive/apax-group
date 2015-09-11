'use strict';

angular.module('chuanliApp', [
  'ionic',  // ionic has injected 'ngAnimate', 'ngSanitize', 'ui.router'
  'ngCookies',
  'ngResource'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/tab/tab.html',
        controller: "TabCtrl"
      })

      .state('tab.core-unit', {
        url: '/core-unit',
        views: {
          'tab': {
            templateUrl: 'app/core-unit/core-unit.html',
            controller: 'CoreUnitCtrl'
          }
        }
      })

      .state('tab.press-center', {
        url: '/press-center',
        views: {
          'tab': {
            templateUrl: 'app/press-center/press-center.html',
            controller: 'PressCenterCtrl'
          }
        }
      })

      .state('tab.contact-us', {
        url: '/contact-us',
        views: {
          'tab': {
            templateUrl: 'app/contact-us/contact-us.html',
            controller: 'ContactUsCtrl'
          }
        }
      })
      .state('tab.recruitment', {
        url: '/recruitment',
        views: {
          'tab': {
            templateUrl: 'app/recruitment/recruitment.html',
            controller: 'RecruitmentCtrl'
          }
        }
      })

      .state('gallery', {
        cache: false,
        url: '/gallery/:cate',
        templateUrl: 'app/gallery/gallery.html',
        controller: 'GalleryCtrl'
      })

      .state('video', {
        cache: false,
        url: '/video/:name',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });

    $urlRouterProvider
      .otherwise('/main');

    $locationProvider.html5Mode(false);
  })

  .run(function($rootScope, $ionicViewSwitcher) {
    var verticalCate = /^(main|core\-unit|press\-center|contact\-us|recruitment)$/;
    var cate = /core\-unit|press\-center|contact\-us|recruitment/;

    $rootScope.$on('$stateChangeStart', function(event, next, toP, from) {
      var matches =  next.name.match(cate);
      // tab need to know current category for showing correct current navi with special color
      $rootScope.currCate = matches ? matches[0] : '';

      // ionic default show view switching with horizontal slide, so must spec vertical slide when switch between main category
      // I add vertical of option manually in ionic transition
      if( next.name.replace('tab.', '').match(verticalCate) ) {
        $ionicViewSwitcher.nextTransition('vertical');
      }
    })
  });
