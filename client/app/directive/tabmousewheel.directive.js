angular.module('chuanliApp')
  .directive('tabMouseWheel', function ($location, $timeout) {
    var navi = ['/tab/core-unit', '/tab/press-center', '/tab/contact-us', '/tab/recruitment'];

    return function (scope, element, attr) {
      var timeoutId;
      element.on('mousewheel.tab', function (event, delta) {
        $timeout.cancel(timeoutId);
        timeoutId = $timeout(function() {
          var nextPath;
          delta < 0 ?
            nextPath = navi[navi.indexOf($location.path()) + 1] :
            nextPath = navi[navi.indexOf($location.path()) - 1];
          nextPath && $location.path(nextPath);
        }, 500);
        event.preventDefault();
        event.stopPropagation();
      });

      scope.$on('$destroy', function() {
        element.off('mousewheel.tab');
      });
    }
  });
