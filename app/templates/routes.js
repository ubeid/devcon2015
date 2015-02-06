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
                    });
            }
        ]);

        return loReturn;
    });