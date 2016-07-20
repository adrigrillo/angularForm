(function () {
	'use strict';

	var app = angular.module('app', ["ngRoute", "formulario"]);


	/* Routeador */
	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "form.html"
			})
			.when("/home", {
				templateUrl: "form.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	});

	/***************************************************
	 * DIRECTIVAS
	 * -------------------------------------------------
	 * Las directivas se utilizan cogiendo el nombre 
	 * separado con guiones, es decir, si la directiva
	 * es 'molaMucho' en el html se utilizará:
	 * <mola-Mucho></mola-Mucho>
	 **************************************************/
	/* Directiva formulario */
	app.directive('piePag', function () {
		return {
			restrict: 'E',
			templateUrl: 'footer.html'
		};
	});
})();
