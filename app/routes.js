var Thing = require('./models/thing');

  module.exports = function(app) {
    
    //Routes for Thing =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    //Get All
    app.get('/api/things', function(req, res) {
      Thing.find(function(err, things) {
        if (err) {
          //error
        }

        res.json(things);
      }); 
    });

    //Post
    app.post('/api/things', function(req, res) {
      var thing = new Thing(req.body);
      thing.save()
        .then(function(err, thing) {
          if (err) {
            //error
          }

          res.sendStatus(201);
        });
    });







    //Route to static files =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });

  };