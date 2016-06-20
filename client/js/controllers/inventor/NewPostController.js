inventionApp.controller('NewPostController', function($scope, InventorFactory){

	$scope.tech_areas = [];

	$scope.invention

	InventorFactory.get_tech_areas(function(data){
		$scope.tech_areas = data;
		console.log("$scope.tech_areas:", $scope.tech_areas);
	})

	$scope.add_invention = function(){
		InventorFactory.add_invention($scope.invention);
	}

})