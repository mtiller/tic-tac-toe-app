console.log("When you loaded this page, you ran something too!")

var ttt = angular.module("TTT", []);

ttt.controller("GameCtrl", ["$scope", function($scope) {
	this.user = "Player";
	var Leftcolumn=["X","X","O"]
	var Centercolumn=["O","X","O"]
	var rightcolumn=["X","O","X"]
	this.board=[Leftcolumn, Centercolumn, rightcolumn]
}]);
