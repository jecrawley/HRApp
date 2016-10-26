'use strict';

/**
 * @ngdoc function
 * @name hrappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrappApp
 */
angular.module('hrappApp')
  .controller('MainCtrl', function ($scope, $location, userService) {
      $scope.storeName = function () {
          var name = document.getElementById('username').value;
          userService.setUser(name);
          console.log(name);
          $location.path("/timecard");
      }
  });
