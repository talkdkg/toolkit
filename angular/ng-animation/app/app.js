angular.module('App', [])

  .controller('AppCtrl', function($rootScope, appLoading) {
    $rootScope.topScope = $rootScope;
    $rootScope.$on('$routeChangeStart', function() {
      appLoading.loading();
    });
  })

  .controller('AppHomeCtrl', function($scope, appLoading) {
    appLoading.ready();
  })

  .controller('HomeCtrl', function($scope, $filter, appLoading) {
     var filter = $filter('filter');  
     $scope.tweets = [
        { id_str: "foo", profile_image_url: "https://si0.twimg.com/profile_images/1301262251/thunderhill_boston_terrier_normal.jpg",
           text: "Cras sit amet nibh libero." },
        { id_str: "kyle", profile_image_url: "https://si0.twimg.com/profile_images/378800000142862904/dfd27fcedb53b6781d9da5657c66502c_normal.jpeg",
           text: "U vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla" }, 
        { id_str: "bob", profile_image_url: "https://si0.twimg.com/profile_images/2320767706/d0qthl90f6hlh60eu6dk_normal.jpeg",
           text: "Donec lacinia congue felis in faucibus, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo." },
        { id_str: "jim", profile_image_url: "https://si0.twimg.com/profile_images/2176846885/-5-1_normal.jpeg",
           text: "Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus." }       
     ];
     var cache = $scope.tweets;
     $scope.filter = function(q) {
        $scope.tweets = filter(cache, q);
     };          
     appLoading.ready();
  })

  .controller('CalendarCtrl', function($scope, appLoading) {
    function makeCell(number, type) {
      return { number: number, type: type};
    };
    $scope.headings = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var days = [];
    days.push(makeCell(31,'outer'));
    for(var i=1;i<=30;i++) {
      days.push(makeCell(i,'inner'));
    }
    days.push(makeCell(1,'outer'));
    days.push(makeCell(2,'outer'));
    days.push(makeCell(3,'outer'));
    days.push(makeCell(4,'outer'));

    var rows = [];
    var r=0;
    for(var i=0, j=0;i<days.length;i++, j++) {
      if(j > 0 && j == 7) {
        j = 0;
        r++;
      }
      var day = days[i];
      rows[r] = rows[r] || {};
      rows[r].cells = rows[r].cells || [];
      day.weekday = $scope.headings[j];
      day.index = i;
      rows[r].cells.push(day);
    }
    $scope.rows = rows;

    $scope.q = 'all';
    $scope.isActive = function(cell) {
      var q = $scope.q.toString().toLowerCase();
      if(q.length > 0 && q == cell.index) {
        return true;
      }
      else if(q == 'all') {
        return true;
      }
      else if(q == 'weekends') {
        return cell.weekday == 'Sunday' || cell.weekday == 'Saturday';
      }
      else if(q == 'weekdays') {
        return !(cell.weekday == 'Sunday' || cell.weekday == 'Saturday');
      }
      else if(q == 'odd') {
        return cell.number % 2 == 1;
      }
      else if(q == 'even') {
        return cell.number % 2 == 0;
      }
      else {
        return q ? (cell.weekday.toLowerCase() == q || cell.number == q) : false;
      }
    };

    $scope.search = function(q) {
      $scope.q = q;
    };

    appLoading.ready();
  })

  .controller('NewsCtrl', function($scope, appLoading) {
    appLoading.ready();
  })



   .config(function($routeProvider) {
      $routeProvider.when('/home', {
         controller : 'HomeCtrl',
         templateUrl : './html/home_tpl.html'
      }).when('/calendar', {
         controller : 'CalendarCtrl',
         templateUrl : './html/calendar_tpl.html'
      }).when('/news', {
         controller : 'NewsCtrl',
         templateUrl : './html/news_tpl.html'
      }).otherwise({
         redirectTo: '/home'
      });
   })

   .factory('appLoading', function($rootScope) {
      var timer;
      return {
         loading : function() {
            clearTimeout(timer);
            $rootScope.status = 'loading';
            if(!$rootScope.$$phase) $rootScope.$apply();
         },
         ready : function(delay) {
            function ready() {
               $rootScope.status = 'ready';
               if(!$rootScope.$$phase) $rootScope.$apply();
            }
            clearTimeout(timer);
            delay = delay == null ? 500 : false;
            if(delay) {
               timer = setTimeout(ready, delay);
            } else {
               ready();
            }
         }
      };
   });
