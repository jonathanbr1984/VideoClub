'use strict';

(function() {

    class AutocompleteController {

        constructor() {}

        $onInit() {}

    }

    angular.module('videoClubApp')
        .component('autocomplete', {
            templateUrl: 'app/Autocomplete/Autocomplete.html',
            controller: AutocompleteController,
            controllerAs: 'vm'
        });
})();