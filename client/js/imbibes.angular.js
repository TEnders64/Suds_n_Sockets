myApp.controller('ImbibesController', function ($scope, $location, UserFactory, mySocket, ImbibeFactory){
	
	_this = this;
	_this.all_users = UserFactory.all_users;
	console.log('UserFactory from inside ImbibesController: ', UserFactory);
	console.log(mySocket);
});

myApp.factory('ImbibeFactory', function ($http){
	var factory = {};


	return factory;
});