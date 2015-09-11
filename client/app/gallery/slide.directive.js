angular.module('chuanliApp')
  .directive('apaxSlide', function ($window) {
    var width, imgWidth, slide, slideLeft = 0;
    var intervalId;

    var init = function() {
      slideLeft = 0;
      angular.element($window).on('resize.apax-slide', function() {
        width = angular.element(this).width();
        imgWidth = slide.find('img:first').width();
      });

      width = angular.element($window).width();
      imgWidth = slide.find('img:first').width();
      slide.find('img').clone().appendTo(slide);
      move();
    };

    var move = function() {
      slideLeft --;
      slide.css({left: slideLeft});
      if (slideLeft <= -imgWidth) {
        slideLeft = 0;
      }
      intervalId = requestAnimationFrame(move, 100);
    };

    return function (scope, element, attr) {
      slide = element;
      element.find('img').on('load.apax-slide', function(e) {
        init();
      });

      scope.$on('$destroy', function() {
        angular.element($window).off('resize.apax-slide');
        element.find('img').off('load.apax-slide');
        cancelAnimationFrame(intervalId);
      });
    }
  });
