inventionApp.controller('EditPostController', function($scope, InventorFactory, $routeParams){

	$scope.invention = {};

	$scope.tech_areas = [];

	InventorFactory.get_tech_areas(function(data){
		$scope.tech_areas = data;
	})

	InventorFactory.get_post($routeParams.id, function(data){
		$scope.invention = data[0];
		console.log("$scope.invention is now:", $scope.invention)
	})

	$scope.delete_post = function(){
		InventorFactory.delete_post($routeParams.id);
	}

	$scope.update_post = function(){
		InventorFactory.update_post($routeParams.id, $scope.invention)
	}

})