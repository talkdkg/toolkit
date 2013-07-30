'use strict';
// TODO: fix scrolling content on iPhone
// TODO: retrieve press releases and render it in press releases page
// TODO: move app into phonegap
// TODO: open external URL in inChild Browser
// TODO: create factory for video
// TODO: create factory for podcasts
// TODO: store podcasts
// TODO: use webworks for ajax
// TODO: connection alert if there's not internet

angular.module('anywhereApp', [])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/podcasts', {
            templateUrl: 'views/podcasts.html',
            controller: 'PodcastsCtrl'
          })
          .when('/videos', {
            templateUrl: 'views/videos.html',
            controller: 'VideosCtrl'
          })
          .when('/pressReleases', {
            templateUrl: 'views/pressReleases.html',
            controller: 'PressReleasesCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    })


