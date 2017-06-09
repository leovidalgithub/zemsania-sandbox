angular.module( 'myApp', [] )
	.controller( 'myCtrl', [ '$scope', function( $scope ){

		$scope.save = function() {
			console.log( $scope.user );
			if( $scope.userForm.$valid ) {
				console.log( 'good!');
			} else {
				console.log( 'so bad!');				
			}
		};
	}]);
