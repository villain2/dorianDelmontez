(function (Directives, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.directive('generaldir', function ($location)
	{
		return {
			restrict: 'A',
			controller: DorianDelmontez.Controllers.GeneralCtrl
		};
	});

}(DorianDelmontez.Directives = DorianDelmontez.Directives || {} ));