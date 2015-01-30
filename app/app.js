define([
		'angular',
		'uirouter',
		'kendoui',
        'gmap',
        'bootstrap',
        'custom',
        './namespace',
        './templates/module.require',
        './sessions/module.require',
        './speakers/module.require',
        './sponsors/module.require',
        './venues/module.require'
    ],
    function (
		angular,
		uirouter,
		kendoui,
        gmap,
        bootstrap,
        custom,
        namespace,
        Templates,
        Sessions,
        Speakers,
        Sponsors,
        Venues
	) {
        'use strict';
        var app = angular.module(namespace,
		[
		   'ui.router',
		   'kendo.directives',
           'uiGmapgoogle-maps',
           Sessions,
           Speakers,
           Sponsors,
           Venues
		]).run(function () {
		});
        return app;
    });
