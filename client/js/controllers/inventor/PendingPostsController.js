inventionApp.controller('PendingPostsController', function($scope, InventorFactory){

	$scope.inventor = {};

	$scope.open_posts = [];

	$scope.open_preview_limit = 10;

	$scope.messages = "";

	InventorFactory.get(function(data){
		$scope.inventor = data;

		for (invention in data.posts) {
			if (data.posts[invention].accepted != true){
				$scope.open_posts.push(data.posts[invention]);
			}
		}
	})

	if (global_messages.length > 0) {
		$scope.message = global_messages.pop();
	}

})