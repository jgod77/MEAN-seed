var mongoose = require('mongoose');

module.exports = mongoose.model('Thing', {
  name : {type : String, default: ''}
});