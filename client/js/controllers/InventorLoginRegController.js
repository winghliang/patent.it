inventionApp.controller('InventorLoginRegController', function($scope, InventorFactory){

	$scope.inventorLogin = function(){
		console.log('in inventor login controller:', $scope.returningInventor);
		InventorFactory.login($scope.returningInventor);
	}

})