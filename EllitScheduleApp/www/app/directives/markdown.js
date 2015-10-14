(function(){
  'use strict';

    angular
      .module('eliteApp')
      .directive('markdown', markdown);

      function markdown(){
        var converter = new showdown.Converter();
        return {
          restrict: 'A',
          link: function(scope, el, attrs){
            attrs.$observe('markdown', function(value){
              var markup = converter.makeHtml(value);
              el.html(markup);
            });
          }

        }
      };
})();
