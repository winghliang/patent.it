inventionApp.controller('ProsecutorsController', function($scope, ProsecutorFactory){

	$scope.inventions = [];

	$scope.open_posts = [];

	$scope.open_preview_limit = 4;

	ProsecutorFactory.get_inventions(function(data){
		$scope.inventions = data;
		console.log("all inventions:", $scope.inventions);

		for (invention in data) {
			if (data[invention].accepted == false){
				$scope.open_posts.push(data[invention]);
			}
		}		
		
	})

	if (global_messages.length > 0) {
		$scope.message = global_messages.pop();
	}

})