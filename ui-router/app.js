'use strict';

var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise( "/business" );
				
				$stateProvider
						.state('business', {
							url: "/business",
							templateUrl: "business.html"
						})
						.state('business.products', {
							url: "/products",
							templateUrl: "products.html",
							controller: function($scope){
								$scope.products = ["Computer", "Printers", "Phones", "Bags"];
							}
						})
						.state('business.services', {
							url: "/services",
							templateUrl: "services.html",
							controller: function($scope){
								$scope.services = ["Selling", "Support", "Delivery", "Reparation"];
							}
						})
						.state('business.others', {
							url: "/others",
							template: "<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>"
						})
						.state('portfolio', {
							url: "/portfolio",
							views: {
								"" 	:    { templateUrl: "portfolio.html" },
								"view1@portfolio" : { template: "<h4 style='padding: 8px;'>Write whatever you want, it's your virtual company</h4>" },
								"view2@portfolio" : { templateUrl: "clients.html" ,
									controller: function($scope,$interval) {
											$scope.clients = ["HP", "IBM", "Microsoft"],
												$scope.var = 'One thing';
											var flag = true;
											$interval( function() {
												$scope.clients = flag ? ["Google", "Free", "J2EE"] : ["HP", "IBM", "Microsoft"];
												flag = !flag;
												$scope.var     = $scope.var     === 'One thing' ? 'Another thing !!!' : 'One thing';
											}, 900 );
									}
								},
								"view3@portfolio" : { template: "<h2>Best programming language of the year ---> {{language}}</h2>" ,
									controller : function($scope, $interval) {
										$scope.language = 'J2EE';
											$interval( function() {
												$scope.language = $scope.language === 'J2EE' ? 'JavaScript' : 'J2EE';
											}, 1200 );										
									}
								}
							}
						})
			}]);
