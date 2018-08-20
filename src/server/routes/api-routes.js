// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the emails
  app.get("/api/emails/", function(req, res) {
    db.Email.findAll({
      attributes: ['id', 'email']
    })
    .then(function(dbEmail) {
      res.json(dbEmail);
    });
  });

  // POST route for saving a new post
  app.post("/api/emails/", function(req, res) {
    db.Email.create({
      email: req.body.email
    },{
      fields: ['email']
    })
    .then(function(dbEmail) {
      res.json(dbEmail);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/emails/delete/", function(req, res) {
    db.Email.destroy({
      where: {
        // when using fetch must pass in state value as Data to use body
        email: req.body.email
      }
    })
    .then(function(dbEmail) {
      res.json(dbEmail);
    });
  });


  // get password
  app.get("/api/password/", function(req, res) {
    db.Password.findAll({
      // attributes: ['password']
    })
    .then(function(dbPassword) {
      res.json(dbPassword);
    });
  });

};
