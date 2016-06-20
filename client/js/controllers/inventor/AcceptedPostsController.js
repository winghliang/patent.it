inventionApp.controller('AcceptedPostsController', function($scope, InventorFactory){

	$scope.inventor = {};

	$scope.accepted_posts = [];

	$scope.accepted_preview_limit = 2;

	$scope.messages = "";

	InventorFactory.get(function(data){
		$scope.inventor = data;

		for (invention in data.posts) {
			if (data.posts[invention].accepted == true){
				$scope.accepted_posts.push(data.posts[invention]);
			}
		}
	})

	if (global_messages.length > 0) {
		$scope.message = global_messages.pop();
	}

})