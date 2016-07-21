(function () {
	'use strict';

	var formulario = angular.module('formulario', ["ngMaterial", "multiStepForm", "validator"]);

	formulario.controller('formController', function ($scope, $location, $route) {
		$scope.model = {
			"nombre": "",
			"apellidos": "",
			"email": "",
			"fecNacimiento": ""
		};
		$scope.steps = [
			{
				templateUrl: 'Steps/step1.html',
				title: '0'
			},
			{
				templateUrl: 'Steps/step2.html',
				title: '50'
			},
			{
				templateUrl: 'Steps/step3.html',
				title: '10'
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
