'use strict';

function AuthService($auth, $state) {
    var Auth = {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin
    };

    function login(user) {
        $auth.login(user)
            .then(response => {
                console.log("login ok", response);
                $state.go('main');
            })
            .catch(err => {
                console.log("Error de login");
                $state.go('login');
            })
    }

    function logout() {
        if (Auth.isAuthenticated()) {
            $auth.logout()
                .then(response => {
                    $state.go("main");
                    console.log("Salida Ok");
                })
        }
    }

    function isAuthenticated() {
        if ($auth.isAuthenticated()) {
            return true;
        } else {
            return false;
        }
    }

    function isAdmin() {
        if (Auth.isAuthenticated()) {
            if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return Auth;

}
angular.module("videoClubApp")
    .factory('AuthService', AuthService);