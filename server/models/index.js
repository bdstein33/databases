var db = require('../db');




module.exports = {
  messages: {
    get: function (cb) {
      var queryString = 'SELECT * FROM messages;';
      db.access(queryString, function(data){
        cb(data);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryString = 'SELECT * FROM users;';
      db.access(queryString, function(data){
        cb(data);
      });
    },
    post: function () {}
  }
};

