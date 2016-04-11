var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	handle: {type: String, required: true, unique: true},
	beers: Number,
	breweries: [{type: String, unique:true}]
});

userSchema.plugin(uniqueValidator);

mongoose.model('User', userSchema);