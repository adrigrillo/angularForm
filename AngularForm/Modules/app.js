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
})();
