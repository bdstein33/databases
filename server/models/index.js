var db = require('../db');




module.exports = {
  messages: {
    get: function (cb) {
      var queryString = 'SELECT * FROM messages;';
      db.access(queryString, function(data){
        cb(data);
      });
    }, // a function which produces all the messages
    post: function (data, cb) {
      var queryString = 'INSERT INTO users (username) VALUES (\"' + data.username + '\");';
      db.access(queryString, function(){
        cb();
      });

      queryString = 'INSERT INTO rooms (roomname) VALUES (\"' + data.roomname + '\");';
      db.access(queryString, function(){
        cb();
      });


      queryString = 'INSERT INTO messages (text, username, roomname, created_at) VALUES (\"' + data.text + '\", \"' + data.username + '\", \"' + data.roomname + '\", \"' + data.createdAt + '\");';
      console.log(queryString);
      db.access(queryString, function(){
        cb();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var queryString = 'SELECT * FROM users;';
      db.access(queryString, function(data){
        cb(data);
      });
    },

    post: function (username, cb) {
      var queryString = 'INSERT INTO users (username) VALUES ("' + username + '");';
      db.access(queryString, function(){
        cb();
      });
    }
  }
};
