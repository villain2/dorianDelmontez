(function (Directives, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.directive('audioloop', function ()
	{
	    return {
	        restrict: 'E',
	        template: '<audio loop><source src="audio/soundtrack.ogg" type="audio/ogg"><source src="audio/soundtrack.mp3" type="audio/mpeg">Update to a modern browser to hear this soundtrack.</audio>'
	    };
	});
}(DorianDelmontez.Directives = DorianDelmontez.Directives || {} ));