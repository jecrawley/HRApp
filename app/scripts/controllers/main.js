'use strict';

/**
 * @ngdoc function
 * @name hrappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrappApp
 */
angular.module('hrappApp')
  .controller('MainCtrl', function ($scope, $location, $http, userService) {

      $scope.error = "";

      $scope.addUser = function () {

          //var username = document.getElementById("username");
          //var pass = document.getElementById("pass");

          var toPost = {
              id: 0,
              username: $scope.username,
              password: $scope.pass
          };

          var message;

          $http({
              method:'POST',
              url: 'http://localhost:8080/users',
              data: toPost
          }).
          then( function (response) {
              message = response.data.message;
              if (message === "Success!") {
                  userService.setUser($scope.username);
                  $location.path("/timecard");
              } else {
                  $scope.error = "User already exists!";
              }
          }, function (response) {
              console.log(response);
          });
      }

      $scope.login = function () {

          //var username = document.getElementById("username").value;
          //var pass = document.getElementById("pass").value;
          var actualPass;

          $http({
              method:'GET',
              url: 'http://localhost:8080/hrusers/search/findByUsername?username=' + $scope.username
          }).
          then( function (response) {

              if (response.data._embedded.users[0] !== undefined) {
                  actualPass = response.data._embedded.users[0].password
              }

              if ($scope.pass === actualPass) {
                  userService.setUser($scope.username);
                  $location.path("/timecard");
              } else {
                  $scope.error = "Incorrect username or password!";
              }

          });

      }
  });
