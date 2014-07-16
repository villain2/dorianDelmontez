/**
* Configuration for AngularJS
**/
(function (Configs, undefined)
{
	DorianDelmontez.Modules.DorianDelmontez.config(function ($routeProvider, $locationProvider)
	{
		$routeProvider
			.when('/', {
				controller: DorianDelmontez.Controllers.MainCtrl,
				templateUrl: DorianDelmontez.PartialsPath + 'index.html'
			})
			.when('/story', {
				controller: DorianDelmontez.Controllers.StoryCtrl,
				templateUrl: DorianDelmontez.PartialsPath + 'story.html'
			})
			.when('/read', {
				controller: DorianDelmontez.ReadCtrl,
				templateUrl: DorianDelmontez.PartialsPath + 'read.html'
			})
			.when('/game', {
				controller: DorianDelmontez.GameCtrl
			})
			.otherwise({
				redirectTo: '/'
			})
	})
}(DorianDelmontez.Configs = DorianDelmontez.Configs || {} ));