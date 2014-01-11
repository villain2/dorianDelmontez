'use strict';

/* Directives */


angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}])
.directive("levelOneZero", function () {
    return function(scope, element, attrs) {
        console.log('start level 1.0.');
    }
});