'use strict';

function rolesService($resource, API) {
    return $resource(API + "/api/roles/:id", {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}
rolesService.$inject = ['$resource', 'API'];
angular.module('videoClubApp')
    .factory('rolesService', rolesService);