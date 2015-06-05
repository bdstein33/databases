var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      //run a query on messages table
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //return list of all users
      console.log("GET");
    },
    post: function (req, res) {
      //run a query on users table
        //if username does not exist in table
          //then add new user


    }
  }
};

