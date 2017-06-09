angular.module( 'myApp', [
	'angular-loading-bar',
	'ngAnimate' // aparentemente no hace falta
])

	.config([ 'cfpLoadingBarProvider', function( cfpLoadingBarProvider ) {
		console.log( 'config' );
		cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
		cfpLoadingBarProvider.includeBar = true;
		// cfpLoadingBarProvider.latencyThreshold = 2000;
	    cfpLoadingBarProvider.includeSpinner = true;
	}])

	.run([ '$rootScope', function( $rootScope ) {
		console.log( 'run' );
	}])

	.controller( 'myController', ['$scope', '$http', '$interval', 'cfpLoadingBar', function( $scope, $http, $interval, cfpLoadingBar ) {
		console.log( 'controller' );
		$scope.fnHTTP = function() {
			var count = 0,
			url       = 'http://localhost:3000/api';

			$scope.myResponse = 'waiting response from server...';
			var myInterval = $interval( function() {
				console.log( ++count + ' seg' );
			}, 1000);

			$http.get( url )			
				.then( function( data ) {
					$scope.myResponse = data.data;
				})
				.catch( function( err ) {
					console.log( err );	
				})
				.finally( function() { $interval.cancel( myInterval )});
			};
		$scope.fnHTTP();

		$scope.start = function() {
			cfpLoadingBar.start();
		};

		$scope.complete = function () {
			cfpLoadingBar.complete();
		}
	}]);

















