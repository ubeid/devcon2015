define([
    './module',
    './namespace'
], function (module, namespace) {
    'use strict';
    var name = namespace + ".indexService";

    //here list dependencies, e.g. if you need constants then add "namespace + '.foobarConstants'" and declare them in the folder.
    var dependencies = ['$log', '$http'];
    var service = function ($log, $http) {
        var speakers = [];
        var sponsors = [];
        var organisers = [];

        var getSpeakers = function (next) {
            // https://spreadsheets.google.com/feeds/worksheets/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/private/full
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/oyw720/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, speakers);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        var getSponsors = function (next) {
            // https://spreadsheets.google.com/feeds/worksheets/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/private/full
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/ogt46nu/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, sponsors);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        var getOrganisers = function (next) {
            // https://spreadsheets.google.com/feeds/worksheets/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/private/full
            var feedUrl = "https://spreadsheets.google.com/feeds/list/1FVheiBFTNSvR0HS89HamlBYL1lo-LExPTlKhnnKVlas/oxe5fi5/public/values?alt=json&callback=JSON_CALLBACK";
            var feedList = [];

            $http.jsonp(feedUrl)
                .success(function (data) {
                    angular.forEach(data.feed.entry, function (entryX) {
                        feedList.push(entryX);
                    });
                    angular.copy(feedList, organisers);

                    //next(data);
                })
                .error(function (data) {
                    next({ error: true, data: data });
                });
        };

        return {
            getSpeakers: getSpeakers,
            getSponsors: getSponsors,
            getOrganisers: getOrganisers,
            speakers: speakers,
            sponsors: sponsors,
            organisers: organisers
        };
    };

    module.factory(name, dependencies.concat(service));
});