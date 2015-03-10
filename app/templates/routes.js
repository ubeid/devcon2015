define([
        'angular',
        'app',
        './module.require'
], function (angular, app, Templates) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/templates/frontpage.html',
                    controller: Templates + '.indexController'
                })

                .state('register', {
                    url: '/register',
                    templateUrl: 'app/templates/registration.html'
                });
        }
    ]);

    return loReturn;
});