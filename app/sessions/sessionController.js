define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.sessionController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.sessionService'];
    var controller = function ($scope, $stateParams, $state, sessionService) {

        $scope.entries = sessionService.entries;
        $scope.selected = {};

        //console.log($state.current.data.day);
        sessionService.getList();
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});