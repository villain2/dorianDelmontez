var ddApp = angular.module("ddApp", ['ngRoute', 'ngSanitize'])

.factory('facebook', [function () 
{
    return FB;
}])

.service('pageTransitions', ['$rootScope', function ($rootScope)
{
    var switchBackground                = false;
    return switchBackground;
}])