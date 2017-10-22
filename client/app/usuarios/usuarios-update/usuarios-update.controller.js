'use strict';

(function() {

    class UsuariosUpdateComponent {
        constructor(usuariosService, rolesService, ciudadesService, departamentosService, $stateParams, $state, NavegateParams) {
            this.usuariosService = usuariosService;
            this.rolesService = rolesService;
            this.ciudadesService = ciudadesService;
            this.departamentosService = departamentosService;
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.NavegateParams = NavegateParams;
        }
        $onInit() {
            this.departamentosService.query().$promise
                .then(response => {
                    this.departamentos = response;
                })
                .catch(err => console.error(err));

            this.usuariosService.get({ id: this.NavegateParams.getData('idUsuario') }).$promise
                .then(response => {
                    this.usuario = response;
                    console.log(this.usuario);
                })
                .catch(err => console.error(err));

            this.rolesService.query().$promise
                .then(response => {
                    this.roles = response;
                })
                .catch(err => console.error(err));
        }

        getCiudad() {
            this.ciudadesService.getCiudades({ idDepartamento: this.idDepartamento }).$promise
                .then(response => {
                    this.ciudades = response;
                    console.log("Ciudades", this.ciudades);
                })
                .catch(err => console.error(err));
        }

        updateUser() {
            this.usuariosService.update({ id: this.usuario.id }, this.usuario).$promise
                .then(response => {
                    console.log("Usuario actualizado")
                    this.$state.go('usuarios-list');
                })
                .catch(err => console.error(err));
        }

    }

    angular.module('videoClubApp')
        .component('usuariosUpdate', {
            templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
            controller: UsuariosUpdateComponent,
            controllerAs: 'vm'
        });

})();