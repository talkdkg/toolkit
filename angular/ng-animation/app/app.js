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

  .controller('AppRepeatCtrl', function($scope, $filter, appLoading) {
    $scope.tweets = [];
    var cache = [], filter = $filter('filter');

  })

  .controller('AppShowHideCtrl', function($scope, appLoading) {
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

  .controller('AppSwitchCtrl', function($scope, appLoading) {
    appLoading.ready();
  })

  .controller('AppIncludeCtrl', function($scope, appLoading) {
    appLoading.ready();
  })

  .config(function($routeProvider) {
    $routeProvider.when('/ng-repeat', {
      controller : 'AppRepeatCtrl',
      templateUrl : './templates/repeat_tpl.html'
    }).when('/ng-show-hide', {
      controller : 'AppShowHideCtrl',
      templateUrl : './templates/show_hide_tpl.html'
    }).when('/ng-switch', {
      controller : 'AppSwitchCtrl',
      templateUrl : './templates/switch_tpl.html'
    }).otherwise({
      redirectTo: '/ng-repeat'
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
        }
        else {
          ready();
        }
      }
    };
  });
