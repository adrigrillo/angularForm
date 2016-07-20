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
				templateUrl: 'form.html',
				title: '0'
			},
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
