/**
* Configuration for AngularJS
**/
(function (Configs, undefined)
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
}(DorianDelmontez.Configs = DorianDelmontez.Configs || {} ));