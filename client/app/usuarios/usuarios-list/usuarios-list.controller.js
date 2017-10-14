'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService, rolesService) {
    this.usuariosService = usuariosService;
    this.rolesService = rolesService;
  }

  $onInit(){
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
  		console.log("USUARIOS OK",response);
      this.usuarios = response;
  	})
  	.catch(err => {
  		console.log("ERROR", err);
    });
  }
}

UsuariosListComponent.$inject = ['usuariosService', 'rolesService'];
angular.module('videoClubApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
