console.log("When you loaded this page, you ran something too!")

var ttt = angular.module("TTT", []);

ttt.controller("GameCtrl", ["$scope", function($scope) {
	this.user = "Matthew";
}]);
