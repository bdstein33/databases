var Sequelize = require('sequelize');

var sequelize = new Sequelize('chat', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

exports.generateSchema = function() {
  console.log("GENERATING SCHEMA");

  var sequelize = new Sequelize('chat', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

  var User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING(20)
    }
  });

  var Room = sequelize.define('room', {
    roomname: {
      type: Sequelize.STRING(20)
    }
  });

  var Message = sequelize.define('message', {
    text: {
      type: Sequelize.STRING
    }
  });

  // Create User and Room table
  User.sync({force: true});
  Room.sync({force: true});

  // Add foreign key constraints to Message table
  Message.belongsTo(User, {foreignKey: 'user_id'});
  Message.belongsTo(Room, {foreignKey: 'room_id'});

  // Create Message table
  Message.sync({force: true});

  User.sync().then(function(){
    User.create({
      username: 'Ben'
    });
    User.create({
      username: 'Richard'
    });
  });

  Room.sync().then(function(){
    Room.create({
      roomname: 'School'
    });
  });
};
