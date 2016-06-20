inventionApp.factory('ProsecutorFactory', function($http, $location){

    var factory = {};

    var inventions = [];

    var message = "";

    var bids = [];

    factory.get_inventions = function(callback){
        $http.get('/inventions').success(function(output){
            inventions = output;
            callback(inventions);
        })
    }

    factory.get_post = function(post_id, callback){
        console.log("post_id:", post_id);
        $http.get('/post/'+post_id).success(function(output){
            post = output;
            callback(post);
        })
    } 

    factory.get_bids = function(callback){
        $http.get("/bids").success(function(output){
            bids = output;
            callback(bids);
        })
    }

    factory.place_bid = function(post_id, bid){
        $http.post('/bid/'+post_id, bid).success(function(output){
            message = output;
            global_messages.push(message);
            $location.path('#/')
        })
    }  


    return factory;

})