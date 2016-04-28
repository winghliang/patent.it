var inventionApp = angular.module('inventionApp', ['ngRoute', 'angularMoment']);

inventionApp.factory('InventorFactory', function($http){
    var factory = {};

    factory.login = function(inventor){
        console.log('in factory login:', inventor);
        $http.post('/inventorLogin', inventor);
    }

    return factory;

})