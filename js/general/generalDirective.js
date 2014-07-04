(function (Directives, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.directive('generaldir', function ($location)
	{
		return {
			restrict: 'A',
			controller: DorianDelmontez.Controllers.GeneralCtrl,
			link: function (scope, elm)
			{
				console.log('general directive');
			}
		};
	});

}(DorianDelmontez.Directives = DorianDelmontez.Directives || {} ));