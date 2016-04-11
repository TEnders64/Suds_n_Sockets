var users = require('./../controllers/users.js');

module.exports = function(app){

	app.get('/users/:handle', users.show);

	app.post('/users', users.create);
	
}