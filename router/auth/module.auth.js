(function () {
    'use strict';
    angular
        .module('hours.auth', [])
        .config(authConfig);

    authConfig.$invoke = ['$stateProvider'];
    function authConfig($stateProvider) {
        console.log('authConfig');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/auth/login/login.tpl.html',
                controller: 'LoginController'
            })
            // .state('recovery', {
            //     url: '/recovery',
            //     templateUrl: '/features/auth/recovery/recovery.tpl.html',
            //     controller: 'RecoveryController',
            //     data: {
            //         template: 'login',
            //         permissions: {
            //             only: ['anonymous'],
            //             redirectTo: 'dashboard'
            //         }
            //     }
            // })
            // .state('changePassword', {
            //     url: '/change-password',
            //     templateUrl: '/features/auth/changePassword/changePassword.tpl.html',
            //     controller: 'ChangePasswordController',
            //     data: {
            //         template: 'login',
            //         permissions: {
            //             except: ['anonymous'],
            //             redirectTo: 'login'
            //         }
            //     }
            // })
            // .state('userProfile', {
            //     url: '/profile',
            //     templateUrl: '/features/auth/userProfile/userProfile.tpl.html',
            //     controller: 'UserProfileController',
            //     data: {
            //         template: 'complex',
            //         permissions: {
            //             except: ['anonymous'],
            //             redirectTo: 'login'
            //         }
            //     }
            // });
    }
}());