var ddApp = angular.module("ddApp", []);

ddApp.factory('Data', function () {
	return {message: "I'm data from a service."};
});

ddApp.controller("navCtrl", function($scope, $http) {
    $scope.bookNav     = [];
    
    $http.get('scripts/json/layout.json')
    .success(function(data) {
        $scope.bookNav                 = data[0].bookItems;
        console.log($scope);
    })
})


