'use strict';

angular.module('hrappApp')
  .controller('TimeCardCtrl', function ($scope, $http, userService) {

      $scope.name = userService.getUser();

    //   $http({
    //       method:'GET',
    //       url: 'http://localhost:8080/users'
    //   }).
    //   then( function (response) {
    //       $scope.name = response.data[0].username;
    //   });

      $scope.getTimeCards = function () {

          $http({
              method:'GET',
              url: 'http://localhost:8080/timecards'
          }).
          then( function (response) {
              $scope.timecards = response.data;
          });
      }

      $scope.submitTimeCards = function () {

          var start = document.getElementById("start");
          var end = document.getElementById("end");
          var today = new Date();
          var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

          var toPost = {
              id: 0,
              startTime: start.value,
              endTime: end.value,
              date: date
          };

          $http({
              method:'POST',
              url: 'http://localhost:8080/timecards',
              data: toPost
          }).
          then( function (response) {
              console.log(response.data);
          });
      }

  });
