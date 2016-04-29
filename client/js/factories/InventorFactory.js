var inventionApp = angular.module('inventionApp', ['ngRoute', 'angularMoment']);

inventionApp.factory('InventorFactory', function($http){

    var factory = {};

    var inventors = [];

    factory.index = function(callback){
    	$http.get('/inventors').success(function(output){
    		inventors = output;
    		callback(inventors);
    	})
    }

    return factory;

})