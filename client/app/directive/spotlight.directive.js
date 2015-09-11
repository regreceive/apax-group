angular.module('chuanliApp')
  .directive('spotlight', function() {
    return function (scope, element, attr) {
      var spotlightZ = attr.spotlightZ, spotlightX = attr.spotlightX, spotlightLeft = attr.spotlightLeft, spotlightTop = attr.spotlightTop, spotlightOpacity = attr.spotlightOpacity;
      var inclineQty = attr.inclineQty, inclineX = attr.inclineX, inclineWidth = attr.inclineWidth, inclineHeight = attr.inclineHeight;
      var triangleColor = attr.triangleColor;

      spotlightOpacity = spotlightOpacity || 0.3;

      var triangle = angular.element('<div class="triangle"></div>');
      var incline = angular.element('<div class="incline"></div>');
      var rotate = angular.element('<div class="rotate"></div>');
      element.addClass('spotlight');
      element.css({
        'transform': 'rotateX('+ spotlightX +') rotateZ('+ spotlightZ +')',
        'margin-left': (spotlightLeft - 100) + 'px',
        'margin-top': spotlightTop + 'px',
        'opacity': spotlightOpacity
      });
      triangle.css({
        'background-image': 'linear-gradient(135deg, '+ triangleColor +' -50%, transparent 35%)'
      });
      incline.append(triangle);

      var initY = Math.random() * 360;
      for(var i = 0; i < inclineQty; i++) {
        var transform = 'rotateY('+ (i * 70 + initY) +'deg) rotateX('+ inclineX +') scale('+ inclineWidth +', '+ inclineHeight +')';
        rotate.append(incline.clone().css('transform', transform));
      }
      element.append(rotate);
    }
  });
