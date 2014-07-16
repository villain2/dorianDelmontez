(function (Directives, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.directive('changeBackground', function ()
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
	            bgContainer.css('background-image', 'url(img/backgrounds/' + newBG + '.jpg)');
	            TweenLite.to(bgContainer, 0.75, {opacity: 1, delay: 1});
	            console.log(bgContainer);
	        }
	    };
	});

}(DorianDelmontez.Directives = DorianDelmontez.Directives || {} ));