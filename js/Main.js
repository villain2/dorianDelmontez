var ddApp = angular.module("ddApp", []);

function mainCtrl($scope, Data) {
    $scope.data     = Data;
    console.log($scope);
}