console.log("When you loaded this page, you ran something too!")

var ttt = angular.module("TTT", []);

ttt.controller("GameCtrl", ["$scope", function($scope) {
	var game = this;
	game.user = "Player";
	game.board = [
		["X", "X", "O"],
		["O", "", "O"],
		["X", "O", "X"]
	]

	game.move = function() {
		game.board[1][1] = "X";
	};
}]);
