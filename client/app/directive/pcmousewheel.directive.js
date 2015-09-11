angular.module('chuanliApp')
  .directive('pcMouseWheel', function ($location, $timeout) {
    var navi = ['/tab/press-center/event', '/tab/press-center/live', '/tab/press-center/recreation'];

    return function (scope, element, attr) {
      var timeoutId;
      element.on('mousewheel.pc', function (event, delta) {
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
        element.off('mousewheel.pc');
      });
    }
  });
