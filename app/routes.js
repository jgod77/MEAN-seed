var bcrypt = require('bcryptjs');

var User = require('./models/user');
var Thing = require('./models/thing');

  module.exports = function(app) {
    
    //Routes for Auth =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
     app.post('/api/register', function(req, res) {
        var newUser = new User();
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        User.findOne({email: newUser.email})
          .then(function(err, user) {
            if(err || user) {
              //error
              return;
            }
            bcrypt.hash(newUser.password, 10, function(err,hash){
              newUser.password = hash;
              newUser.save()
                .then(function(err) {
                  if(err) {
                    //error
                  }
                });
            });
      
          });
      });

      app.post('/api/authenticate', function(req, res) {
        User.findOne({email: req.body.email}, function(err, user) {
          if(err) {
            //error
          }
          bcrypt.compare(req.body.password, user.password, function(err, isAuth) {
            console.log(isAuth)
          });
        });
      });


    //Routes for Users =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

      app.get('/api/users', function(req, res) {
        User.find(function(err, users) {
          if (err) {
            //error
          }
          console.log(users);
          res.json(users);
        }); 
      });



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
        .then(function(err) {
          if (err) {
            //error
          }
          // res.json(thing)
          res.sendStatus(201);
        });
    });

    //Delete
    app.delete('/api/things/:id', function(req, res) {
      Thing.remove({
        _id: req.params.id
      })
        .then(function(err, thing) {
          if (err) {
            //error
          }

          res.json({ message: 'Successfully deleted' });
      });
    });







    //Route to static files =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    app.get('*', function(req, res) {
      res.sendfile('./public/index.html');
    });

  };