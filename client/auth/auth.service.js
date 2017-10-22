'use strict';

function AuthService($auth, $state, localStorageService) {
    var Auth = {
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
        getRoles: getRoles,
        getIdUser: getIdUser
    };

    function login(user) {
        $auth.login(user)
            .then(response => {
                console.log("login ok", response);
                $state.go('main');
                localStorageService.set('idUsuarioLogueado', Auth.getIdUser());
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
    /*toma todos los roles que tenga el usuario que inicia sesion*/
    function getRoles() {
        if (Auth.isAuthenticated()) {
            return $auth.getPayload().roles
        } else {
            return false;
        }
    }
    /*¨*/
    /*captura el id del usuario*/
    function getIdUser() {
        if (Auth.isAuthenticated()) {
            return $auth.getPayload().sub
        } else {
            return false;
        }
    }
    /**/
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