var myApp = angular.module('myApp', ['ngRoute','btford.socket-io']);

myApp.factory('mySocket', function (socketFactory){
	console.log(this);
	return socketFactory();

});

myApp.config(function ($routeProvider){
	$routeProvider
		.when('/',
			{
			 templateUrl: '/partials/login.html',
			 controller: 'UsersController',
			 controllerAs: 'UsersCtrl'
			}
			)
		.when('/imbibes',
			{
			 templateUrl: '/partials/imbibes.html',
			 controller: 'ImbibesController',
			 controllerAs: 'ImbibesCtrl'
			}
			)
		.when('/visit',
			{
			 templateUrl: '/partials/visit.html',
			 controller: 'BreweriesController',
			 controllerAs: 'BrewsCtrl'
			}
			)
		.otherwise(
			{redirectTo: '/'}
			);
});