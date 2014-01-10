'use scrict';

var actorImage;
var stage;

/* Controllers */
angular.module('myApp.controllers', []).
controller('Level1Ctrl', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window){
	stage			= $rootScope.stage;
	setupField();
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
		drawField();
	}

	function drawField() {
		var fieldSprite 			 = new createjs.Shape();
		var randomGreen;
		var greenHex = ['#5A6351', '#636f57', '#7f9a65', '#9cba7f'];


		stage						= new createjs.Stage("gameGrid");
		stage.addChild(fieldSprite);

		fieldSprite.graphics.setStrokeStyle(1).beginStroke('#ffffff');

		function shuffle(o){ //v1.0
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};


		for(var i = 0; i < 5; i++) {
			for (var j = 0; j < 9; j++) {
				shuffle(greenHex);
				randomGreen = greenHex[0];
				fieldSprite.graphics.beginFill(randomGreen).drawRect(65*j, 75*i, 65, 75);
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

		//create multiple
		for( var i = 0; i < 5; i++) {
			for(var j = 0; j < 3; j++) {
				var spriteSheet 		= new createjs.SpriteSheet(data);
				var animation 			= new createjs.Sprite(spriteSheet, "idle");
				animation.x			= Math.round( 32.5+65*j );
				animation.y			= Math.round( 32.5+75*i);
				stage.addChild(animation);
			}
		}

/*		animation.x				= Math.round(65/2);
		animation.y				= Math.round(75/2);
		stage.addChild(animation);*/

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