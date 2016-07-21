(function () {
	'use strict';

	var formulario = angular.module('formulario', ["ngMaterial", "ngAnimate", "ui.bootstrap", "ui.bootstrap.datepicker", "multiStepForm", "validator"]);

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

	formulario.controller('dateController', function ($scope) {
	    $scope.dateOptions = {
	        format: 'dd/MM/yyyy',
	        maxDate: new Date(2020, 5, 22),
	        minDate: new Date(),
	        startingDay: 1
	    };

	    $scope.open1 = function () {
	        $scope.popup1.opened = true;
	    };

	    $scope.setDate = function (year, month, day) {
	        $scope.model.fecha = new Date(year, month, day);
	    };

	    $scope.format = 'dd/MM/yyyy';

	    $scope.popup1 = {
	        opened: false
	    };
	});
})();
