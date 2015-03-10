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
                .state('sessions-view', {
                    abstract: true,
                    url: '/sessions',
                    templateUrl: 'app/templates/ui-view.html',
                    controller: Sessions + '.sessionController'
                })

                .state('sessions', {
                    abstract: true,
                    url: '/sessions',
                    templateUrl: 'app/sessions/session.html',
                    controller: Sessions + '.sessionController'
                })

                .state('sessions.list', {
                    url: '',
                    templateUrl: 'app/sessions/session.day.html'
                })

                .state('sessions.day', {
                    url: '/{dayId:[0-9]{1}}',
                    templateUrl: 'app/sessions/session.day.html',
                    controller: Sessions + '.sessionController'
                })

                .state('sessions.cfp', {
                    url: '/call',
                    templateUrl: 'app/sessions/session.cfp.html'
                })

                .state('sessions.cfp.propose', {
                    url: '/submit',
                    views: {
                        '@sessions': {
                            templateUrl: 'app/sessions/session.submit.html'
                        }
                    }
                });
        }
    ]);

    return loReturn;
});
