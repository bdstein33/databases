var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        res.send(data);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      models.messages.post(req.body, function(){
        res.send();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //return list of all users
      models.users.get(function(data){
        res.send(data);
      });
    },
    post: function (req, res) {
      console.log("POST");
      var username = req.body.username;

      models.users.post(username, function(){
        res.send();
      });

    }
  }
};

// var sendResponse = function(res, obj, status) {
//   status = status || 200;
//   res.write
// };
