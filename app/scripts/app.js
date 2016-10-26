'use strict';

/**
 * @ngdoc overview
 * @name hrappApp
 * @description
 * # hrappApp
 *
 * Main module of the application.
 */
angular
  .module('hrappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/timecard', {
          templateUrl: 'views/timecard.html',
          controller: 'TimeCardCtrl',
          controllerAs: 'timecard'
      })
      .when('/notfound', {
          templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  });
