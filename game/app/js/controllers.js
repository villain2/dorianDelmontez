'use scrict';

var actorImage;
var stage;

/* Controllers */
angular.module('myApp.controllers', []).
controller('Level1Ctrl', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window){
	stage			= $rootScope.stage;
	setupField();
	drawField();
	drawActor();
	GameController($scope);

	function setupField() {
		$rootScope.gameField 			= new Array();
		for (var i = 0; i < 5; i++) {
			$rootScope.gameField[i]		= new Array();
			for(var j = 0; j < 9; j++) {
				$rootScope.gameField[i][j] 	= 0;
			}
		}
	}

	function drawField() {
		var fieldSprite 			 = new createjs.Shape();
		var randomGreen;
		stage						= new createjs.Stage("gameGrid");
		stage.addChild(fieldSprite);

		fieldSprite.graphics.setStrokeStyle(1).beginStroke('#ffffff');

		for(var i = 0; i < 5; i++) {
			for (var j = 0; j < 9; j++) {
				randomGreen = (125+Math.floor(Math.random()*50))*256;
				fieldSprite.graphics.beginFill('#' + randomGreen + '0').drawRect(25+65*j, 80+75*i, 65, 75);
			}
		}
		stage.update();
	}

	function drawActor() {
		actorImg 				= new Image();
		actorImg.onload			= handleImageLoad;
		actorImg.onerror		= handleImageError;
		actorImg.src 			= "img/actors/warrior/warrior_idle.png";
	}

	function addActor () {

		var data = {
			images: [actorImg],
			frames: {width: 64, height: 64, regX: 32, regY: 32},
			animations: {idle: [0, 10, "idle"]}
		}
		var spriteSheet 		= new createjs.SpriteSheet(data);
		var animation 			= new createjs.Sprite(spriteSheet, "idle");
		animation.x				= 75;
		animation.y				= 120;
		stage.addChild(animation);

		createjs.Ticker.addEventListener("tick", tick);
	}



	function handleImageLoad (e) {
		console.log('image loaded ' + e);
		addActor();
	}

	function handleImageError () {
		console.log('image did not load');
	}
}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);

GameController = function ($scope) {
	var scope 		= $scope;
}

tick = function () {
	stage.update();
}