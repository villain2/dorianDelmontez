(function (Controllers, undefined)
{
	Controllers.GeneralCtrl = ['$scope', '$routeParams', '$location', '$http', 'generalFactory', function ($scope, $routeParams, $location, $http, generalFactory)
	{
		var scope 			= $scope;
		scope.location 		= $location;
		scope.routeParams 	= $routeParams;
		scope.mainNav 		= [];

		/**
		* Factory for obtaining navigation from json file
		**/
		generalFactory.getMainLinks(function (results)
		{
			scope.mainNav 			= results[0].bookItems;
		});
	}];

}(DorianDelmontez.Controllers = DorianDelmontez.Controllers || {} ));