inventionApp.controller('ProsecutorsController', function($scope, ProsecutorFactory){

	$scope.inventions = [];

	$scope.open_posts = [];

	$scope.bids = [];

	$scope.accepted_bids = [];

	$scope.pending_bids = [];

	$scope.completed_bids = [];

	$scope.open_preview_limit = 4;

	$scope.accepted_preview_limit = 2;

	$scope.pending_preview_limit = 2;

	$scope.completed_preview_limit = 2;

	$scope.message = "";

	ProsecutorFactory.get_inventions(function(data){
		$scope.inventions = data.inventions;

		for (invention in $scope.inventions) {
			var already_bidded = false		
			if ($scope.inventions[invention].accepted == false){
				for (bid in $scope.inventions[invention].bids){
					if ($scope.inventions[invention].bids[bid]._prosecutor == data.prosecutor) {
						already_bidded = true;
						break
					}; 
				}
				if (already_bidded == false){
					$scope.open_posts.push($scope.inventions[invention]);
				}
			}
		}
		console.log("open posts:", $scope.open_posts);		
	})

	ProsecutorFactory.get_bids(function(data){
		$scope.bids = data
		console.log("Attorney's bids:", data)

		for (bid in data) {
			if (data[bid]._invention.completed == true) {
				$scope.completed_bids.push(data[bid])
			} else if (data[bid].accepted == true) {
				$scope.accepted_bids.push(data[bid])
			} else if (data[bid]._invention.accepted == false) {
				$scope.pending_bids.push(data[bid]) 				
			}
		}
		console.log("Completed Bids:", $scope.completed_bids);
		console.log("Accepted Bids:", $scope.accepted_bids);
		console.log("Pending Bids:", $scope.pending_bids);
	})

	if (global_messages.length > 0) {
		$scope.message = global_messages.pop();
	}

})