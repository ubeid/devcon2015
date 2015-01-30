require.config({
    urlArgs : 'bust=v1' + (new Date().getTime()),
    waitSeconds : 20, //make sure it is enough to load all scripts
    paths : {
        'angular' : '../libs/angular/1.3.11/angular.min',
        'uirouter': '../libs/angular/angular-ui/0.2.8/angular-ui-router.min',
        'gmap': '../libs/angular/angular-google-maps/2.0.12/angular-google-maps.min',
        'lodash': '../libs/lodash/lodash',
        'kendoui': '../libs/kendoui/kendo.all.min',
        'jquery': '../libs/jquery/jquery.min',
        'bootstrap': '../libs/bootstrap/bootstrap-3.3.1.min',
        'custom': '../libs/devcon'
    },
    shim : {
        'angular' : {
            exports : 'angular',
            deps : ['jquery']
        },
        'uirouter': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'lodash': {
            exports: 'lodash'
        },
        'gmap': {
            deps: ['angular', 'lodash']
        },
        'kendoui': {
            deps : ['angular', 'jquery']
        }
    }
});

require([
	'./namespace',
	'./app',
	'./routes'
],
function (namespace) {
	angular.element(document).ready(function() {
		 angular.bootstrap(document, [namespace]);
   });
});