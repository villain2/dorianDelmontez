(function (Controllers, undefined)
{
	Controllers.GeneralCtrl = function ($scope, $routeParams, $location, $http)
	{
		console.log('this is the general controller');
		var scope 			= $scope;
		scope.location 		= $location;
		scope.routeParams 	= $routeParams;
	};

}(DorianDelmontez.Controllers = DorianDelmontez.Controllers || {} ));