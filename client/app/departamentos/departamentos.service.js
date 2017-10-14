'use strict';

function departamentosService($resource, API) {
    return $resource(API + "/api/departamentos/:id", {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        },
        getDepartamentos: {
            url: API + '/api/departamentos/find',
            method: 'GET',
            isArray: true
        }
    })
}
departamentosService.$inject = ['$resource', 'API'];
angular.module('videoClubApp')
    .factory('departamentosService', departamentosService);