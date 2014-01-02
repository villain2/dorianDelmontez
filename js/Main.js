var ddApp = angular.module("ddApp", ['ngRoute'])

.factory('facebook', [function () {
    return FB;
}])

.service('pageTransitions', ['$rootScope', function ($rootScope) {
    var switchBackground                = false;
    return switchBackground;
}])

.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'navCtrl'
    })
    .when('/explore', {
        templateUrl: '/templates/explore.html',
        controller: 'navCtrl'
    })
    .when('/read', {
        templateUrl: '/templates/read.html',
        controller: 'readCtrl'
    })
    .when('/play', {
      templateUrl: '/templates/play.html',
        controller: 'navCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
})

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

.controller("aboutCtrl", function($scope, $route) {
    $scope.message = "About page";
    console.log($route);
})

.controller('readCtrl', function($scope, $route) {
    $scope.message      = "Read Page";
    console.log($route);

})


.directive("audioLoop", function () {
    return {
        restrict: 'E',
        template: '<audio autoplay loop><source src="/audio/soundtrack2.ogg" type="audio/ogg"><source src="/audio/soundtrack2.mp3" type="audio/mpeg">Update to a modern browser to hear this soundtrack.</audio>'
    }
})

.directive("changeBackground", function () {
    return function (scope, element, attrs) {
        var newBG           = attrs.changeBackground;
        var bgContainer     = $('.mainContainerBG');

        switch (newBG) {
            case 'background':
                TweenLite.to(bgContainer, 0.75, {opacity: 0, delay: 1, onComplete: loadBackground})
            break;

            default:
            break;
        }

        function loadBackground() {
            console.log('load bg: ' + newBG);
            bgContainer.css('background-image', 'url(/img/backgrounds/' + newBG + '.jpg)');
            TweenLite.to(bgContainer, 0.75, {opacity: 1, delay: 1});
        }
    }

})