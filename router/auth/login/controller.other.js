(function () {
'use strict';
    angular
        .module('hours.other')
        .controller('OtherController', otherController);

    otherController.$invoke = ['$scope','$state'];
    function otherController($scope, $state) {
        console.log('and then it is me -> otherController');            


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
            console.log('other destroyed');
        });
    }
}());