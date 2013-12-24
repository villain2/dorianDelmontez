var ddApp = angular.module("ddApp", [])

.factory('facebook', [function () {
    return FB;
}])

.controller("navCtrl", function($scope, $http) {
    $scope.bookNav     = [];
    
    $scope.showLoginModal = function () {
        $('#loginModal').foundation('reveal', 'open', '');
    }
    
    $http.get('scripts/json/layout.json')
    .success(function(data) {
        $scope.bookNav                 = data[0].bookItems;
    })
})


.directive("audioLoop", function () {
    return {
        restrict: 'E',
        template: '<audio autoplay loop><source src="/audio/soundtrack2.ogg" type="audio/ogg"><source src="/audio/soundtrack2.mp3" type="audio/mpeg">Update to a modern browser to hear this soundtrack.</audio>'
    }
})

