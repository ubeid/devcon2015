define([
	'angular',
	'app',
    './sessions/routes',
    './speakers/routes',
    './sponsors/routes'
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
                .state('home', {
                    url: '/'
                });
        }
    ]);

    return loReturn;
});
