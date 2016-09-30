var app = angular.module("PortfolioApp");

app.controller("aboutController", ["$scope", function($scope){
	$scope.testMessage = "this is the ABOUT page";
}])
