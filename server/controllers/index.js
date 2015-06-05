var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //return list of all users
      console.log("GET");
      models.users.get(function(data){
        res.send(data);
        console.log(data);
        //RETURN HTTP RESPONSE WITH DATA
      });
    },
    post: function (req, res) {
      //run a query on users table
        //if username does not exist in table
          //then add new user


    }
  }
};

// var sendResponse = function(res, obj, status) {
//   status = status || 200;
//   res.write
// };
