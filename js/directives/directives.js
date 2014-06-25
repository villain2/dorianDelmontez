angular.module('ddApp')
.directive("audioLoop", function () 
{
    return {
        restrict: 'E',
        template: '<audio autoplay loop><source src="/audio/soundtrack2.ogg" type="audio/ogg"><source src="/audio/soundtrack2.mp3" type="audio/mpeg">Update to a modern browser to hear this soundtrack.</audio>'
    }
})

.directive("changeBackground", function () 
{
    return function (scope, element, attrs) 
    {
        var newBG           = attrs.changeBackground;
        var bgContainer     = $('.mainContainerBG');

        switch (newBG) {
            case 'background':
                TweenLite.to(bgContainer, 0.75, {opacity: 0, delay: 1, onComplete: loadBackground})
            break;

            case 'theDea_bg':
                TweenLite.to(bgContainer, 0.75, {opacity: 0, delay: 1, onComplete: loadBackground})
            break;

            case 'none':
                TweenLite.to(bgContainer, 0.75, {opacity: 0, delay: 1})
            break;

            default:
            break;
        }

        function loadBackground() 
        {
            console.log('load bg: ' + newBG);
            bgContainer.css('background-image', 'url(/img/backgrounds/' + newBG + '.jpg)');
            TweenLite.to(bgContainer, 0.75, {opacity: 1, delay: 1});
        }
    }

})

.directive('loadPaperModal', function ()
{
    var changeTemplate;
    
    return {
        restrict: 'E',
        scope: {
            value: '@'
        },
        templateUrl: '{{value}}'
        /*link: function (scope, element, attrs)
        {
            element.text('templates/paperStories/loche_brothers.html');
        }*/
    }
})