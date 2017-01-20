var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  email : {type: String, required: true, index: {unique: true} },
  password : {type: String, required: true}
});