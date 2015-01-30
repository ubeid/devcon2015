define([
        'angular',
        'app',
        './module.require'
],
    function (angular, app, Sponsors) {
        'use strict';

        var loReturn = app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('sponsors', {
                        url: '/sponsors',
                        templateUrl: 'app/sponsors/sponsor.list.html',
                        controller: Sponsors + '.sponsorController'
                    });
            }
        ]);

        return loReturn;
    });