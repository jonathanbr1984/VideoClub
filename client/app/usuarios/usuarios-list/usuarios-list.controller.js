'use strict';

(function() {

    class UsuariosListComponent {
        constructor(usuariosService, rolesService, NavegateParams, $state) {
            this.usuariosService = usuariosService;
            this.rolesService = rolesService;
            this.NavegateParams = NavegateParams;
            this.$state = $state;
        }

        $onInit() {
            this.rolesService.query().$promise
                .then(response => {
                    console.log("ROLES", response);
                    this.roles = response;
                })
                .catch(err => {
                    console.log("ERROR", err);
                })

            this.usuariosService.query().$promise
                .then(response => {
                    console.log("USUARIOS OK", response);
                    this.usuarios = response;
                })
                .catch(err => {
                    console.log("ERROR", err);
                });
        }
        goUpdateUser(idUser) {
            this.NavegateParams.setData('idUsuario', idUser);
            this.$state.go('usuarios-update');
        }
    }

    UsuariosListComponent.$inject = ['usuariosService', 'rolesService', 'NavegateParams', '$state'];
    angular.module('videoClubApp')
        .component('usuariosList', {
            templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
            controller: UsuariosListComponent,
            controllerAs: 'vm'
        });

})();