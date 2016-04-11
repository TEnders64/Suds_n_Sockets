myApp.controller('UsersController', function ($scope, $location, UserFactory){
	
	_this = this;

	this.login = function(){
		_this.exists = false;
		console.log("logging in: "+_this.handle);
		UserFactory.login(_this.handle, function(response){
			if (response.does_not_exist){
				_this.does_not_exist = true;
				console.log('User does not exist yet...please register');
			}else{
				_this.user = response.user;
				_this.all_users = response.users;
				//console.log('Logged in, trying to redirect path');
				$location.path('/imbibes');
			}
		});

		_this.handle = "";
	}

	this.register = function(){
		_this.does_not_exist = false;
		console.log("registering: "+_this.handle);
		UserFactory.register(_this.handle, function(response){
			console.log(response);
			if (response.exists){
				_this.exists = true;
			}else{
				console.log('User does not exist yet...creating');
				_this.user = response.user;
				_this.all_users = response.users;
				//console.log('Registered, trying to redirect path');
				$location.path('/imbibes');
			}
		});

		_this.handle = "";
	}

});

myApp.factory('UserFactory', function ($http){
	var factory = {};

	factory.user = null;

	factory.login = function (handle, callback){
		console.log(handle);
		$http.get('/users/'+handle).success(function (response){
			if (response.user){
				console.log('Successful Login...User = ', response.users);
				factory.all_users = response.users;
				factory.user = response.user
				callback({user: response.user, users: response.users})
			}else{
				console.log("Response says this username doesn't exist. Can't login ");
				callback({does_not_exist: true});
			}
		});
	}

	factory.getUser = function (){
		return factory.user.handle;
	}

	factory.register = function (handle, callback){
		console.log(handle);
		$http.post('/users', {handle: handle}).success(function (response){
			if (response.user){
				console.log('Successful Registration...Users = ', response.users);
				factory.all_users = response.users;
				factory.user = response.user;
			}else{
				//factory.exists = response.exists;
				console.log("Resopnse says this username already exists. Can't register");
				callback({exists: true});
			}
		});
	}

	return factory;
});