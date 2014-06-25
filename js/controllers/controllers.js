angular.module('ddApp').
controller("navCtrl", function($scope, $http) 
{
    $scope.bookNav     = [];
    
    $scope.showLoginModal = function () 
    {
        $('#loginModal').foundation('reveal', 'open', '');
    }
    
    $http.get('scripts/json/layout.json')
    .success(function(data) 
    {
        $scope.bookNav      = data[0].bookItems;
    })
    
    $scope.message          = "New Page";
})

.controller('indexCtrl', function ($scope, $route) 
{
    $scope.message      = "Home Page";
    console.log($route);

})

.controller("aboutCtrl", function ($scope, $route) 
{
    $scope.message = "About page";
    console.log($route);
})

.controller('readCtrl', function ($scope, $route, $http) 
{
    $scope.message      = "Read Page";

    //variables
    var papersObj, totalPapers;

    //get json for each paper to display
    $http.get('scripts/json/storySamples.json')
    .success(function(data) 
    {
        papersObj               = data[0].storySamples;
        totalPapers             = papersObj.length;
        $scope.papersObj        = papersObj;
    })

    $scope.readPaper = function () {
        console.log(this.paper.id);
        $scope.showPaperModal(this.paper.link);
    }
    
    $scope.showPaperModal = function (paperLink) 
    {
        console.log(paperLink);
        $('#paperModal').foundation('reveal', 'open', '');
    }

})

