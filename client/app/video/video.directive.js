angular.module('chuanliApp')
  .directive('apaxVideo', function() {
    var video;
    return function (scope, element, attr) {
      window.aaa = element;
      video = element.find('video');

      scope.play = function() {
        video[0].play();
      };

      scope.$on('add-source', function(d, data) {
        video[0].setAttribute('type', data.type);
        video[0].setAttribute('src', data.src);
        video[0].load();
      });

      scope.$watch(function() {
        scope.duration = video[0].duration;
        scope.currentTime = video[0].currentTime;
      });

      video.on('loadedmetadata.apax', function() {
        scope.$apply();
      });

      video.on('timeupdate.apax', function() {
        scope.$apply();
      });

      scope.$on('$destroy', function() {
        video.off('loadedmetadata.apax');
        video.off('timeupdate.apax');
      });

      scope.$emit('video-ready');
    }
  });
