(function () {
    'use strict';
    angular
        .module( 'hours.other', [] )
        .config( authConfig );

    authConfig.$invoke = [ '$stateProvider' ];
    function authConfig( $stateProvider ) {

        console.log( 'otherConfig' );

        $stateProvider
            .state( 'otherThing', {
                url: '/other',
                templateUrl: '/auth/login/other.tpl.html',
                controller: 'OtherController'
            })
    }
}());