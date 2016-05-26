inventionApp.controller('InventorsController', function($scope, InventorFactory){

	$scope.inventor = {};

	$scope.open_posts = [];

	$scope.accepted_posts = [];

	$scope.completed_posts = [];

	$scope.open_preview_limit = 2;

	$scope.accepted_preview_limit = 2;

	$scope.completed_preview_limit = 2;

	$scope.message = "";

	InventorFactory.get(function(data){
		$scope.inventor = data;

		console.log("$scope.inventor is:", data);

		for (invention in data.posts) {
			if (data.posts[invention].completed == true){
				$scope.completed_posts.push(data.posts[invention]);
			} else if (data.posts[invention].accepted == true){
				$scope.accepted_posts.push(data.posts[invention]);
			} else {
				$scope.open_posts.push(data.posts[invention]);
			}
		}
		console.log("$scope.open_posts is:", $scope.open_posts)
		console.log("$scope.accepted_posts is:", $scope.accepted_posts)
		console.log("$scope.completed_posts is:", $scope.completed_posts)
	})

	if (global_messages.length > 0) {
		$scope.message = global_messages.pop();
	}

})