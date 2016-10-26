'use strict';

angular.module('hrappApp')
  .controller('TimeCardCtrl', function ($scope, userService) {
      $scope.name = userService.getUser();
  });
