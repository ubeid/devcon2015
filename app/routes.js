define([
	'angular',
	'app',
    './extras/routes',
    './sessions/routes',
    './speakers/routes',
    './sponsors/routes',
    './venues/routes',
    './templates/routes'
],
function (angular, app) {
    'use strict';

    var loReturn = app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state('home2', {
                    url: '/2',
                    templateUrl: 'app/templates/frontpage.html'
                });
        }
    ]);

    return loReturn;
});
