inventionApp.controller('PendingPostsController', function($scope, InventorFactory){

	$scope.inventor = {};

	$scope.open_posts = [];

	$scope.open_preview_limit = 10;

	InventorFactory.get(function(data){
		$scope.inventor = data;

		for (invention in data.posts) {
			if (data.posts[invention].accepted != true){
				$scope.open_posts.push(data.posts[invention]);
			}
		}
	})

})