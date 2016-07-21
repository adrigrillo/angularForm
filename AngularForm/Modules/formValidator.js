(function () {
    'use strict';

    var app = angular.module('validator', []);

    app.controller("verCine", ["$scope", "cine", function ($scope, cine) {
        function nombreCine(nombre) {
            $scope.cine = cine(nombre);
            console.error("Ha entrado");
            $scope.cine.$loaded(function () {
                console.error("Ha funcionado");
                if ($scope.cines === null) {
                    console.error("No se han obtenido datos");
                }
            });
        }
    }]);

})();