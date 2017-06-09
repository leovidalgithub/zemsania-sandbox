'use strict';

var App = angular.module('permissionApp',[
									'ui.router',
									'permission',
									'permission.ui'
						]);

// http://www.stefanoscerra.it/permission-based-auth-system-in-angularjs/
// https://github.com/Narzerus/angular-permission/wiki/Controlling-access-in-views

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$stateProvider
						.state('business', {
							url: "/business",
							templateUrl: "business.html",
							data: {
								permissions: {
									only: 'isAuthorized',
									// except: 'isAuthorized',
									redirectTo: 'logout'
								}
							}
						})
						.state('logout', {
							url: "/logout",
							template: '<h2>Sorry, you are out!</h2>',
						})

						// .state('business.products', {
						// 	url: "/products",
						// 	templateUrl: "products.html",
						// 	controller: function($scope){
						// 		$scope.products = ["Computer", "Printers", "Phones", "Bags"];
						// 	}
						// })
						// .state('business.services', {
						// 	url: "/services",
						// 	templateUrl: "services.html",
						// 	controller: function($scope){
						// 		$scope.services = ["Selling", "Support", "Delivery", "Reparation"];
						// 	}
						// })
						// .state('business.others', {
						// 	url: "/others",
						// 	template: "<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>"
						// })
						// .state('portfolio', {
						// 	url: "/portfolio",
						// 	views: {
						// 		"" 	:    { templateUrl: "portfolio.html" },
						// 		"view1@portfolio" : { template: "Write whatever you want, it's your virtual company." },
						// 		"view2@portfolio" : { templateUrl: "clients.html" ,
						// 			controller: function($scope,$interval) {
						// 					$scope.clients = ["HP", "IBM", "MicroSoft"],
						// 						$scope.var = 'One thing';
						// 					var flag = true;
						// 					$interval( function() {
						// 						$scope.clients = flag ? ["Google", "Free", "J2EE"] : ["HP", "IBM", "MicroSoft"];
						// 						flag = !flag;
						// 						$scope.var     = $scope.var     === 'One thing' ? 'Another thing !!!' : 'One thing';
						// 					}, 900 );
						// 			}
						// 		},
						// 		"view3@portfolio" : { template: "<h2>Best programming language of the year ---> {{language}}</h2>" ,
						// 			controller : function($scope, $interval) {
						// 				$scope.language = 'J2EE';
						// 					$interval( function() {
						// 						$scope.language = $scope.language === 'J2EE' ? 'JavaScript' : 'J2EE';
						// 					}, 1200 );										
						// 			}
						// 		}
						// 	}
						// })

				$urlRouterProvider.otherwise( "/business" );
				// $urlRouterProvider.otherwise( function($injector) {
				// 	var $state = $injector.get("$state");
				// 	$state.go('/business');
				// });

			}]);

	  App.run(function (PermPermissionStore,$rootScope) {
		    
		    PermPermissionStore
		      .definePermission('isAuthorized', function () {
		        return true;
		      });

		    PermPermissionStore
		      .definePermission('otherPermission', function () {
		        return true;
		      });

		      $rootScope.$on('$stateChangePermissionStart', function(event, toState, toParams, options) {
			      	console.log('Permission Start Event');
		      		console.log(event);
				});
		      $rootScope.$on('$stateChangePermissionAccepted', function(event, toState, toParams, options) {
			      	console.log('Permission Accepted Event');
		      		console.log(event);
				});
		      $rootScope.$on('$stateChangePermissionDenied', function(event, toState, toParams, options) {
			      	console.log('Permission Denied Event');
		      		console.log(event);
				});
	  });





















