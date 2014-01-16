.controller("navCtrl", function($scope, $http) {
    $scope.bookNav     = [];
    
    $scope.showLoginModal = function () {
        $('#loginModal').foundation('reveal', 'open', '');
    }
    
    $http.get('scripts/json/layout.json')
    .success(function(data) {
        $scope.bookNav                 = data[0].bookItems;
    })
    
    $scope.message          = "New Page";
})

.controller('indexCtrl', function ($scope, $route) {
    $scope.message      = "Home Page";
    console.log($route);

})

.controller("aboutCtrl", function ($scope, $route) {
    $scope.message = "About page";
    console.log($route);
})

.controller('readCtrl', function ($scope, $route) {
    $scope.message      = "Read Page";
    console.log($route);

})