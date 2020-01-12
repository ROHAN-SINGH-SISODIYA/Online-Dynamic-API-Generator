let mongoose = require('mongoose');
var connection=mongoose.connect('mongodb://localhost:27017/API-Gen', { useNewUrlParser: true});
module.exports={connection};
