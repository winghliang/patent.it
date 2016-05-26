inventionApp.factory('InventorFactory', function($http, $location){

    var factory = {};

    var inventor = [];

    var tech_areas = [];

    var message = "";

    var post = {};

    factory.get = function(callback){
    	$http.get('/inventor').success(function(output){
            console.log("inventor retrieved:", output)
            inventor = output;
    		callback(inventor);
    	})
    }

    factory.get_tech_areas = function(callback){
    	$http.get('/tech_areas').success(function(output){
    		tech_areas = output;
    		callback(tech_areas);
    	})
    }

    factory.add_invention = function(newInvention){
    	$http.post('/invention/create', newInvention).success(function(output){
            message = output;
            global_messages.push(message);
            $location.path('#/');
        })
    }

    factory.get_post = function(post_id, callback){
        console.log("post_id:", post_id);
        $http.get('/post/'+post_id).success(function(output){
            post = output;
            callback(post);
        })
    } 

    factory.delete_post = function(post_id){
        $http.post('/post/delete/'+post_id).success(function(output){
            message = output;
            global_messages.push(message);
            $location.path('#/');
        })
    }

    factory.update_post = function(post_id, invention){
        $http.post('/post/update/'+post_id, invention).success(function(output){
            message = output;
            global_messages.push(message);
            $location.path('#/');            
        })
    }

    return factory;

})