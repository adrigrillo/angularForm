(function () {
	'use strict';

	var formulario = angular.module('formulario', ["multiStepForm", "validator", "ui.bootstrap"]);

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


	/* Controlador del calendario*/
	formulario.controller('calendarioPop', function ($scope) {
		$scope.today = function () {
			$scope.dt = new Date();
		};
		$scope.today();

		$scope.inlineOptions = {
			customClass: getDayClass,
			minDate: new Date(),
			showWeeks: true
		};

		$scope.dateOptions = {
			format: 'dd/MM/yyyy',
			minDate: new Date(1900, 1, 1),
			startingDay: 1
		};

		$scope.toggleMin = function () {
			$scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
			$scope.dateOptions.minDate = $scope.inlineOptions.minDate;
		};

		$scope.toggleMin();

		$scope.open1 = function () {
			$scope.popup1.opened = true;
		};

		$scope.setDate = function (year, month, day) {
			$scope.dt = new Date(year, month, day);
		};

		$scope.format = 'dd/MM/yyyy';

		$scope.popup1 = {
			opened: false
		};

		function getDayClass(data) {
			var date = data.date,
			  mode = data.mode;
			if (mode === 'day') {
				var dayToCheck = new Date(date);

				for (var i = 0; i < $scope.events.length; i++) {
					var currentDay = new Date($scope.events[i].date);

					if (dayToCheck === currentDay) {
						return $scope.events[i].status;
					}
				}
			}

			return '';
		}
	});

})();
