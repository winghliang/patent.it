inventionApp.controller('InventorsController', function($scope, InventorFactory){

	$scope.inventors = [];

	InventorFactory.index(function(data){
		console.log(data);
		$scope.inventors = data;
	})

})