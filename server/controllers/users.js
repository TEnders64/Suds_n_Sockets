var User = mongoose.model('User');

module.exports = (function (){
	return {
		show: function (req,res){
			console.log(req.params);
			User.findOne({handle: req.params.handle}, function (err, user){
				if (user){
					User.find({}, function (err, users){
						if (err){
							console.log(err);
						}else{
							res.json({user: user, users: users});
						}
					});
				}else{
					res.json({does_not_exist: true});
				}
			});
		},
		create: function (req,res){
			console.log(req.body);
			User.findOne({handle: req.body.handle}, function (err, user){
				if (user){
					res.json({exists: true});
				}else{
					var new_user = new User({
						handle: req.body.handle,
						beers: 0,
						breweries: 0
					});
					new_user.save(function (err){
						if (err){
							console.log('error saving new user handle');
						}else{
							var this_user;
							User.findOne({handle: req.body.handle}, function (err, user){
								this_user = user;
							});

							User.find({}, function (err, users){
								res.json({user: this_user, users: users});
							});
						}
					});
				}
			});
		}
	}
})();