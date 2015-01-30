define([
        'angular',
        'app',
        './module.require'
],
    function (angular, app, Venues) {
        'use strict';

        var loReturn = app.config([
            '$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('venue', {
                        url: '/venue',
                        templateUrl: 'app/venues/venue.html',
                        controller: Venues + '.venueController'
                    });
            }
        ]);

        return loReturn;
    });