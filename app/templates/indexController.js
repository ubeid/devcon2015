define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + '.indexController';

    var dependencies = ['$scope', '$stateParams', '$state', namespace + '.indexService'];
    var controller = function ($scope, $stateParams, $state, indexService) {

        //$scope.speakers = speakerService.entries;
		//speakerService.getList();

        $scope.sponsors = indexService.sponsors;
        indexService.getSponsors();
		
		// $scope.organisers = organiserService.entries;
		// organiserService.getList();
    };

    module.controller(name, dependencies.concat(controller));

    //return controller function so we can require this function and use it for inheritance.
    return controller;
});