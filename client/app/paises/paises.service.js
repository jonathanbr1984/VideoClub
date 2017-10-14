'use strict';

function paisesService($resource, API) {
    return $resource(API + "/api/paises/:id", {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}
paisesService.$inject = ['$resource', 'API'];
angular.module('videoClubApp')
    .factory('paisesService', paisesService);