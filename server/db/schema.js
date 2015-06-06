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

  // Add foreign key constraints to Message table
  Message.belongsTo(User, {foreignKey: 'user_id'});
  User.hasMany(Message);

  Message.belongsTo(Room, {foreignKey: 'room_id'});
  Room.hasMany(Message);

  User.sync();
  Room.sync();
  Message.sync();
  // Create Message table
  // Message.sync({force: true});

  export.User;
  export.

  // User.sync().then(function(){
  //   User.create({
  //     username: 'Ben'
  //   });


  // });


//   Room.sync().then(function(){
//     Room.create({
//       roomname: 'School'
//     });
//   });
//   // Message.create({
//   //     text: 'New Message',
//   //     user_id: 1,
//   //     room_id: 1
//   //   }).then(function(){
//   //     console.log("--------------");
//   //     console.log(this.username);
//   //     console.log("--------------");
//   // });
//   var msg = Message.build({
//     text: "Im ready for lunch",
//     user_id: 2,
//     room_id: 1
//   });
//   console.log("-------");
//   console.log(msg.username);
//   console.log("-------");
//   msg.save();

// };
