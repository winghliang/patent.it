inventionApp.controller('ViewAcceptedController', function($scope, InventorFactory, $routeParams){

	$scope.invention = {};

	$scope.accepted_bid = {}

	InventorFactory.get_post($routeParams.id, function(data){
		$scope.invention = data[0];
		console.log("$scope.invention is now:", $scope.invention)

		for (bid in $scope.invention.bids) {
			if ($scope.invention.bids[bid].accepted == true) {
				$scope.accepted_bid = $scope.invention.bids[bid];
			}
		}
	})


})