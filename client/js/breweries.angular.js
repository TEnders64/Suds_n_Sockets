myApp.controller('BreweriesController', function ($scope, $location, mySocket, BreweriesFactory, UserFactory){

	this.brewery = null;
	this.input_beers = null;
	this.veiledBeers = false; //hiding the buttons and inputs
	this.breweryComments = null; //
	this.fave = [];
	_this = this;

	this.breakout = function (){
		//console.log('exploding');
		_this.brewery = _this.brewery;
		_this.beer_comments = _this.input_beers.split(", ");
		//console.log(_this.brewery+': '+_this.beers);
		//console.log($scope.beers);
		_this.veiledBeers = true;
		for (var i = 0; i < _this.beer_comments.length; i++){
			_this.fave[i] = false;
		}

	}

	this.addVisit = function (){
		//console.log(_this.newBeerComments);
		console.log(_this.fave);
		var count = 0;
		for (beer in _this.newBeerComments){
			if (_this.fave[count] == true){
				_this.newBeerComments.fave = beer;
			}
			count++;
		}
		// console.log(_this.newBeerComments); //{IPA: "comment", Amber: "comment", fave: IPA}
		// console.log(_this.breweryComments); //"string about brewery"
		BreweriesFactory.saveVisit({
			user: UserFactory.getUser(),
			brewery: _this.brewery,
			breweryComments: _this.breweryComments,
			beerComments: _this.newBeerComments
		});
		_this.brewery = null;
		_this.input_beers = null;
		_this.newBeerComments = null;
		_this.fave = [];
		_this.breweryComments = null;
		$location.path('/imbibes');
	}


});

myApp.factory('BreweriesFactory', function ($http){
	var factory = {};

	factory.saveVisit = function (visit){
		console.log(visit);
	}

	return factory;
});