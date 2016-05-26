inventionApp.factory('ProsecutorFactory', function($http, $location){

    var factory = {};

    var inventions = [];

    // var tech_areas = [];

    var message = "";

    // var post = {};

    factory.get_inventions = function(callback){
        $http.get('/inventions').success(function(output){
            inventions = output;
            callback(inventions);
        })
    }

    // factory.add_invention = function(newInvention){
    //     $http.post('/invention/create', newInvention).success(function(output){
    //         message = output;
    //         global_messages.push(message);
    //         $location.path('#/');
    //     })
    // }

    factory.get_post = function(post_id, callback){
        console.log("post_id:", post_id);
        $http.get('/post/'+post_id).success(function(output){
            post = output;
            callback(post);
        })
    } 

    factory.place_bid = function(post_id, bid){
        $http.post('/bid/'+post_id, bid).success(function(output){
            message = output;
            global_messages.push(message);
            $location.path('#/')
        })
    }  

    // factory.delete_post = function(post_id){
    //     $http.post('/post/delete/'+post_id).success(function(output){
    //         message = output;
    //         global_messages.push(message);
    //         $location.path('#/');
    //     })
    // }

    // factory.update_post = function(post_id, invention){
    //     $http.post('/post/update/'+post_id, invention).success(function(output){
    //         message = output;
    //         global_messages.push(message);
    //         $location.path('#/');            
    //     })
    // }

    return factory;

})