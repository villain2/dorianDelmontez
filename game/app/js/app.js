'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
run(['$rootScope', function($rootScope) {
    //set global variables
    $rootScope.gameField        = [];
    $rootScope.stage            = new createjs.Stage("gameGrid");
    $rootScope.actorContainer;
    $rootScope.actor;
    $rootScope.movingActor;
    $rootScope.actorMoving      = false;
    $rootScope.selector;
}]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/level1.html', controller: 'Level1Ctrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
    
}]);