var ddApp = angular.module("ddApp", []);

ddApp.factory('Data', function () {
	return {message: "I'm data from a service."};
});

function mainCtrl($scope, Data) {
    $scope.data     = Data;
    console.log($scope);
}