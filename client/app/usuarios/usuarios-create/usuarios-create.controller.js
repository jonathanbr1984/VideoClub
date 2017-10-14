'use strict';

(function() {

    class UsuariosCreateComponent {
        constructor(usuariosService, rolesService, departamentosService, $state, tiposDocumentosService, ciudadesService, paisesService) {
            this.usuariosService = usuariosService;
            this.rolesService = rolesService;
            this.departamentosService = departamentosService;
            this.$state = $state;
            this.tiposDocumentosService = tiposDocumentosService;
            this.ciudadesService = ciudadesService;
            this.paisesService = paisesService;
            this.showValidarDocumento = false;
            this.showValidaEmail = false;
            this.usuario = {
                ciudad: {
                    id: null
                }
            }
        }
        $onInit() {
            this.paisesService.query().$promise
                .then(response => {
                    this.paises = response;
                    console.log("Paises", this.paises);
                })
                .catch(err => console.error(err));

            this.ciudadesService.query().$promise
                .then(response => {
                    this.ciudades = response;
                    console.log("Ciudades", this.ciudades);
                })
                .catch(err => console.error(err));

            this.departamentosService.query().$promise
                .then(response => {
                    this.departamentos = response;
                    console.log("Departamentos", this.departamentos);
                })
                .catch(err => console.error(err));

            this.tiposDocumentosService.query().$promise
                .then(response => {
                    this.tiposDocumento = response;
                    console.log("TiposDocumento", this.tiposDocumento);
                })
                .catch(err => console.error(err));

            this.rolesService.query().$promise
                .then(response => {
                    this.roles = response;
                    console.log("Roles", this.roles);
                })
                .catch(err => console.error(err));
        }
        getDepartamento() {
            console.log("Departamentos", this.idPais);
            this.departamentosService.getDepartamentos({ idPais: this.idPais }).$promise
            then(response => {
                    this.departamentos = response;
                    console.log("Departamentos", this.departamentos);
                })
                .catch(err => console.error(err));
        }

        getCiudad() {
            console.log("Ciudades", this.idDepartamento);
            this.ciudadesService.getCiudades({ idDepartamento: this.idDepartamento }).$promise
                .then(response => {
                    this.ciudades = response;
                    console.log("Ciudades", this.ciudades);
                })
                .catch(err => console.error(err));
        }

        createUser() {
            this.usuariosService.save(this.usuario).$promise
                .then(response => {
                    console.log("Usuario registrado correctamente ", response);
                    this.$state.go('usuarios-list');
                })
                .catch(err => {
                    console.log("Error al crear el usuario ", err);
                })
        }
        validarNumDocumento() {
            this.usuariosService.query({ numDocumento: this.usuario.numDocumento }).$promise
                .then(response => {
                    if (response.length == 0 || this.usuario.numDocumento == undefined) {
                        console.log("Valida", response);
                        this.showValidarDocumento = false;
                    } else {
                        console.log("Invalido", response);
                        this.showValidarDocumento = true;
                    }
                })
                .catch(err => {
                    console.log("No existe", err);
                })

        }
        querySearch(text) {
            return this.ciudadesService.getCiudades({ nombre: text }).$promise
                .then(response => {
                    console.log("REST", response);
                    return response;
                })
                .catch(err => console.error(err));

        }
        selectedItemChange(item) {
            console.log("Item", item);
            if (item != undefined) {
                this.usuario.cuidad.id = item.id;
            }
        }

        validarEmail() {
            console.log("Email", this.usuario.email);
            this.usuariosService.query({ email: this.usuario.email }).$promise
                .then(response => {
                    if (response.length == 0 || this.usuario.email == undefined) {
                        console.log("valido", response);
                        this.showValidaEmail = true;
                    } else {
                        console.log("Invalido", response);
                        this.showValidaEmail = false;
                    }
                })
                .catch(err => {
                    console.log("No existe", err);
                })
        }
    }
    UsuariosCreateComponent.$inject = ['usuariosService', 'rolesService', 'departamentosService', '$state', 'tiposDocumentosService', 'ciudadesService', 'paisesService'];
    angular.module('videoClubApp')
        .component('usuariosCreate', {
            templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
            controller: UsuariosCreateComponent,
            controllerAs: 'vm'
        });

})();