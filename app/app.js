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
        './sponsors/module.require'
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
        Sponsors
	) {
        'use strict';
        var app = angular.module(namespace,
		[
		   'ui.router',
		   'kendo.directives',
           'uiGmapgoogle-maps',
           Sessions,
           Speakers,
           Sponsors
		]).run(function () {
		});
        return app;
    });
