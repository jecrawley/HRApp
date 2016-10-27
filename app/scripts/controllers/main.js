'use strict';

/**
 * @ngdoc function
 * @name hrappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hrappApp
 */
angular.module('hrappApp')
  .controller('MainCtrl', function ($scope, $location, $http) {
      $scope.addUser = function () {

          var username = document.getElementById("username");
          var pass = document.getElementById("pass");

          $http({
              method:'GET',
              url: 'http://localhost:8080/hrdatabase/search/findById?username=' + 0
          }).

          then( function (response) {
              var user = response.data._embedded.users[0];

              if (user === undefined && pass.value !== "" ) {
                  postIt (username.value, pass.value);
              }
          });

          var postIt = function (username, password) {

              var toPost = {
                  id: 0,
                  username: username,
                  password: pass.value
              };

              $http({
                  method:'POST',
                  url: 'http://localhost:8080/users',
                  data: toPost
              }).
              then( function (response) {
                  console.log(response.data);
              });
          }
      }
  });
