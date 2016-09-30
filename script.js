var app = angular.module("PortfolioApp", ["ngRoute"]);




app.config(function ($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "/templates/home.html",
			controller: "mainController"
		})

		.when("/portfolio", {
			templateUrl: "/templates/portfolio.html",
			controller: "portfolioController"
		})
        .when("/contact", {
			templateUrl: "/templates/contact.html",
			controller: "contactController"
		})
		.when("/about", {
			templateUrl: "/templates/about.html",
			controller: "aboutController"
		}).otherwise("/", {
			templateUrl: "/templates/home.html",
			controller: "mainController"

		})



});
