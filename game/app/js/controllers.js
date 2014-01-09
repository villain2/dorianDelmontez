'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

controller('Level1Ctrl', [function () {
	var stage		= new createjs.Stage("gameGrid");

	var circle		= new createjs.Shape();
	circle.graphics.beginFill('red').drawCircle(0,0,50);
	circle.x		= 100;
	circle.y		= 100;
	stage.addChild(circle);
	setupField();
	stage.update();
}])

  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

  function setupField() {
  	var gameField			= new Array();
  	for(var i = 0; i < 5; i++) {
  		gameField[i] = new Array();
  		for(var j=0; j < 9; j++) {
  			gameField[i][j] = 0;
  		}
  	}
  	console.log(gameField);
  }