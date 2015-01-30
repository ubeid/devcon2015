define([
        'angular',
        'app',
        './module.require'
],
function (angular, app, Sessions) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('sessions', {
                    url: '/sessions',
                    templateUrl: 'app/sessions/session.list.html',
                    controller: Sessions + '.sessionController'
                })
                .state('sessions.day1', {
                    url: '/thursday',
                    templateUrl: 'app/sessions/session.list.thursday.html',
                    controller: Sessions + '.sessionController',
                    data: {
                        day: 1
                    }
                })
                .state('sessions.day2', {
                    url: '/friday',
                    templateUrl: 'app/sessions/session.list.friday.html',
                    controller: Sessions + '.sessionController',
                    data: {
                        day: 2
                    }
                })
                .state('sessions.day3', {
                    url: '/saturday',
                    templateUrl: 'app/sessions/session.list.saturday.html',
                    controller: Sessions + '.sessionController',
                    data: {
                        day: 3
                    }
                });
        }
    ]);

    return loReturn;
});
