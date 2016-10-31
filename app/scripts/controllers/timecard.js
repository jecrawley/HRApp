'use strict';

angular.module('hrappApp')
  .controller('TimeCardCtrl', function ($scope, $http, userService) {

      $scope.name = userService.getUser();

      $scope.getTimeCards = function () {

          $http({
              method:'GET',
              url: 'http://localhost:8080/hrtimecards/search/findByUsername?username=' + $scope.name
          }).
          then( function (response) {
              $scope.timecards = response.data._embedded.timecards;
          }, function (response) {
              $scope.error = "Unable to process request."
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
              username: $scope.name,
              date: date
          };

          $http({
              method:'POST',
              url: 'http://localhost:8080/timecards',
              data: toPost
          }).
          then( function (response) {
              start.value = "";
              end.value = "";
              if (response.data.message === "Error! Time could not be parsed!") {
                  $scope.error = "Invalid time format.";
              }
          }, function (response) {
              $scope.error = "Unable to process request."
          });
      }

      $scope.delete = function (address) {
          $http({
              method:'DELETE',
              url: address
          }).
          then( function (response) {
              console.log(response);
              $scope.getTimeCards();
          }, function (response) {
              $scope.error = "Unable to process request."
          });
    }

  });
