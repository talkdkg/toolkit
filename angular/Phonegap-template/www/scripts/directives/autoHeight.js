'use strict';

angular.module('anywhereApp')
  /*
   autoHeight directive
   --------------------
   it calculates the header, footer, and offset parameter to return a desirable height for responsive design

   examples:

   Assume
   window.innerHeight = 460;
   <header> and <footer> are 45px

   page structure:

   <div class=".page">
   <header>...</header>
   <div auto-height> height is 370</div>
   <footer>...</footer>
   </div>



   with offset

   <div auto-height="90"> height is 260 ( 370 - 90 ) </div>

   */
    .directive('autoHeight', function ($window) {
      return {
        link: function autoheight(scope, element, attrs) {
          var t;

          function updateHeight() {
            var page = $(element[0]).closest('.page'),
                offsetY = parseInt(attrs.autoHeight, 10) || 0,
                header = page.find("header").height() || 0,
                footer = page.find("footer").height() || 0
                ;
            scope.height = $window.innerHeight - offsetY - header - footer;
            angular.element(element).css('height', scope.height + 'px');
          }

          setTimeout(function () {
            updateHeight();
          }, 0)
          $window.addEventListener("orientationchange", function () {
            updateHeight();
          }, false);

          $window.addEventListener("resize", function () {
            if (t) {
              return;
            }
            t = setTimeout(function () {
              updateHeight();
              t = undefined;
            }, 50)

          });
        }
      };
    });
