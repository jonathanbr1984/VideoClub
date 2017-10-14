'use strict';

angular.module('videoClubApp', [
        'videoClubApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'satellizer',
        'ngMessages',
        'ngMaterial'

    ])
    .constant("API", "http://localhost:8080/VideoClub_Backend")

//config satellizer
.config(function(API, $authProvider) {
        $authProvider.loginUrl = API + '/api/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'videoClub';
    })
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });