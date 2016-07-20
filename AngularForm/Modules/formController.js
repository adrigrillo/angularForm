(function () {
	'use strict';

	var formulario = angular.module('formulario', ["multiStepForm"]);

	formulario.controller('formController', function ($scope, $location, $route) {
		$scope.model = {
			"pelicula": "-",
			"cines": "-",
			"sesion": "-",
			"asientos": "-",
			"numero": 0,
			"precio": 0.0
		};
		$scope.steps = [
			{
				templateUrl: 'principal.html',
				title: '0'
			},
			{
				templateUrl: 'lista-peliculas.html',
				title: '33'
			},
			{
				templateUrl: 'lista-cines.html',
				title: '33'
			},
			{
				templateUrl: 'asientos.html',
				title: '66'
			},
			{
				templateUrl: 'pago.html',
				title: '100'
			},
			{
				templateUrl: 'resumen.html',
				title: '100'
			}
		];
		$scope.cancel = function () {
			alert('Compra cancelada, será redirigido a la página principal');
			$location.path('/home');
			$route.reload();
		};
		$scope.finish = function () {
			$location.path('/home');
			$route.reload();
		};
	});

})();
