(function () {
	'use strict';

	var app = angular.module('app', ["ngMaterial", "ui.bootstrap", "ngRoute", "formulario"]);


	/* Routeador */
	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "form.html"
			})
			.when("/about", {
				templateUrl: "footer.html"
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
	/* Directiva cabecera */
	app.directive('headPag', function () {
		return {
			restrict: 'E',
			templateUrl: 'header.html'
		};
	});
	/* Directiva pie */
	app.directive('piePag', function () {
		return {
			restrict: 'E',
			templateUrl: 'footer.html'
		};
	});
})();
