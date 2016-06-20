inventionApp.controller('ViewAcceptedBidController', function($scope, ProsecutorFactory, $routeParams){

	$scope.invention = {};

	ProsecutorFactory.get_post($routeParams.id, function(data){
		$scope.invention = data[0];
		console.log("$scope.invention is now:", $scope.invention)
	})


})