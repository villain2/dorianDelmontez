/**
* Configuration for AngularJS
**/
(function (Configs, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			.when('/', {
				controller: DorianDelmontez.Controllers.MainCtrl
			})
			.when('/story', {
				controller: DorianDelmontez.Controllers.StoryCtrl
			})
			.when('/read', {
				controller: DorianDelmontez.ReadCtrl
			})
			.when('/game', {
				controller: DorianDelmontez.GameCtrl
			})
			.otherwise({
				redirectTo: '/'
			})
	})
}(DorianDelmontez.Configs = DorianDelmontez.Configs || {} ));