.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'indexCtrl'
    })
    .when('/explore', {
        templateUrl: '/templates/explore.html',
        controller: 'navCtrl'
    })
    .when('/read', {
        templateUrl: '/templates/read.html',
        controller: 'readCtrl'
    })
    .when('/play', {
      templateUrl: '/templates/play.html',
        controller: 'navCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
})