inventionApp.controller('ViewPostController', function($scope, InventorFactory, $routeParams){

	$scope.invention = {};

	InventorFactory.get_post($routeParams.id, function(data){
		$scope.invention = data[0];
		console.log("$scope.invention is now:", $scope.invention)
	})

	$scope.delete_post = function(){
		InventorFactory.delete_post($routeParams.id);
	}

})