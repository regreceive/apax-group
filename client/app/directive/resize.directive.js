angular.module('chuanliApp')
  .directive('responseDiv', function ($window) {
    return function (scope, element, attr) {
      var ratio = attr.rRatio;
      var tgtWidth = attr.rWidth, tgtHeight = attr.rHeight, tgtLeft = attr.rLeft, tgtTop = attr.rTop;
      var ret = {};
      var w = angular.element($window);

      scope.$watch(function () {
        return {
          'h': w.height(),
          'w': w.width()
        };
      }, function (newValue, oldValue) {
        var currRatio = newValue.w / newValue.h;
        if (currRatio >= ratio) {
          newValue.h = newValue.w / ratio;
        } else {
          newValue.w = newValue.h * ratio;
        }
        ret.width = tgtWidth * newValue.w + 'px';
        ret.height = tgtHeight * newValue.h + 'px';
        ret.left = tgtLeft * newValue.w + 'px';
        ret.top = tgtTop * newValue.h + 'px';
        scope.getResizeValue = ret;
      }, true);


      w.on('resize.response-div', function () {
        scope.$apply();
      });

      scope.$on('$destroy', function() {
        w.off('resize.response-div');
      });
    }
  });
