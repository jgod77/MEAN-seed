var Thing = require('./models/thing');

  module.exports = function(app) {
    
    app.get('/api/things', function(req, res) {
      Thing.find(function(err, things) {
        if (err) {
          //error
        }

        res.json(things);
      }); 
    });


    app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });

  };