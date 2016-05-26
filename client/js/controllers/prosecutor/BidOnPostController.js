inventionApp.controller('BidOnPostController', function($scope, ProsecutorFactory, $routeParams){

	$scope.invention = {};

	ProsecutorFactory.get_post($routeParams.id, function(data){
		$scope.invention = data[0];
		console.log("$scope.invention is now:", $scope.invention)
	})

	$scope.place_bid = function(){
		console.log("$scope.bid:", $scope.bid);
		ProsecutorFactory.place_bid($routeParams.id, $scope.bid);
	}



})