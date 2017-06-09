(function () {
'use strict';
    angular
        .module('hours.auth')
        .controller('LoginController', LoginController);

    LoginController.$invoke = ['$scope','$state'];
    function LoginController($scope, $state) {
        console.log('I appear the last -> LoginController');            

        $scope.var = 'Variable from $scope';

        // $scope.login = function () {
        //     $scope.loginForm.error = false;
        //     $scope.loginForm.disabled = true;
        //     UserFactory.doLogin($scope.loginForm)
        //         .then(function (user) {
        //             if (user.defaultPassword) {
        //                 $state.go('changePassword');
        //             } else {
        //                 $state.go('dashboard');
        //             }
        //         }, function (err) {
        //             $scope.loginForm.disabled = false;
        //             $scope.loginForm.error = err;
        //         });
        // };

        $scope.$on('$destroy', function () {
            console.log('login destroyed');
        });
    }
}());