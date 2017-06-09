(function() {
    'use strict';
    angular
        .module('myApp', [
            'ui.router',
            'hours.auth',
            'hours.other'
        ])
        .config(appConfig)
        .run(appRun);

    appConfig.$invoke = ['$locationProvider', '$urlRouterProvider'];
    function appConfig($locationProvider, $urlRouterProvider) {

        console.log('appConfig');

        $urlRouterProvider.otherwise( "/login" );
        // $urlRouterProvider.otherwise(function($injector) {
        //     var $state = $injector.get("$state");
        //     $state.transitionTo('login');
        // });

        // $locationProvider.html5Mode({
        //     enabled: false,
        //     requireBase: false
        // });
    }

    appRun.$invoke = ['$rootScope', '$http'];
    function appRun($rootScope, $http) {

        console.log('appRun');
        // $rootScope.layoutTemplate = '/layouts/login.html';

        $rootScope.$on('$stateChangePermissionStart', function(event, args) {
            console.log('$stateChangePermissionStart');
            // var reqPerms = args.data.permissions;
            // var anonymousUser = angular.isDefined(reqPerms.only) && reqPerms.only[0] === 'anonymous';
            // var locale = (navigator.language || navigator.userLanguage).split('-')[0];

            // $rootScope.activeState = args.data.state;

            // If not anonymous user put Auth header
            // if (!anonymousUser) {
            //     $http.defaults.headers.common['x-auth-token'] = UserFactory.getUserToken();
            //     locale = UserFactory.getUser().locale;
            // }
        });
    }
}());
