inventionApp.controller('AcceptedBidsController', function($scope, ProsecutorFactory){

	$scope.inventions = [];

	$scope.bids = [];

	$scope.accepted_bids = [];

	$scope.accepted_preview_limit = 5;

	$scope.message = "";

	// ProsecutorFactory.get_inventions(function(data){
	// 	$scope.inventions = data.inventions;

	// 	for (invention in $scope.inventions) {
	// 		var already_bidded = false		
	// 		if ($scope.inventions[invention].accepted == false){
	// 			for (bid in $scope.inventions[invention].bids){
	// 				if ($scope.inventions[invention].bids[bid]._prosecutor == data.prosecutor) {
	// 					already_bidded = true;
	// 					break
	// 				}; 
	// 			}
	// 			if (already_bidded == false){
	// 				$scope.open_posts.push($scope.inventions[invention]);
	// 			}
	// 		}
	// 	}
	// 	console.log("open posts:", $scope.open_posts);		
	// })

	ProsecutorFactory.get_bids(function(data){
		$scope.bids = data
		console.log("Attorney's bids:", data)

		for (bid in data) {
			if (data[bid].accepted == true) {
				$scope.accepted_bids.push(data[bid])
			} 
		}
		console.log("Accepted Bids:", $scope.accepted_bids);
	})


})