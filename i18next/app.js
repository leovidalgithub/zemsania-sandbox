(function() {
    'use strict';
    angular
        .module('i18nextApp', [
	            'ngSanitize',
	            'jm.i18next'  // ng-i18next
        ])
        .config(appConfig)
        .run(appRun)
        .controller('myController', myController);

    appConfig.$invoke = ['$i18nextProvider'];
    function appConfig() {
	    'use strict';
    }

    appRun.$invoke = ['$rootScope', '$i18next','$timeout'];
    function appRun($rootScope, $i18next, $timeout) {

        window.i18next
            .use(window.i18nextXHRBackend);
   
        window.i18next.init({
            lng: 'es', // If not given, i18n will detect the browser language.
            fallbackLng: 'dev', // Default is dev
            backend: {
                loadPath: 'locales/{{lng}}/{{ns}}.json'
            }
        }, function (err, t) {
            console.log('resources loaded!');
            $rootScope.$apply();
        });
	
			var locale = (navigator.language || navigator.userLanguage).split('-')[0];
			$i18next.changeLanguage(locale);				
    }

    myController.$invoke = ['$Scope', '$i18next'];
	function myController($scope, $i18next) {
		$scope.changeLng = function ( lng ) {
			$i18next.changeLanguage( lng );
		};
		$scope.fecha = new Date(2001,5,23);
	};

}());
