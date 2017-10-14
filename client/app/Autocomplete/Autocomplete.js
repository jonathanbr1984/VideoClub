'use strict';

angular.module('videoClubApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('autocomplete', {
                url: '/autocomplete',
                template: '<autocomplete></autocomplete>'
            });
    });