'use strict';

angular.module('hrappApp')

.factory('userService', function () {

    function setUser (user) {
        sessionStorage.setItem("user", user);
    };

    function getUser () {
        return sessionStorage.getItem("user");
    };

    return {

        setUser: setUser,
        getUser: getUser
    }

});
