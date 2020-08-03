
var bcrypt = require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  
    var User = sequelize.define("user", {
        //We don't need an id route, it is automatic for us 
      // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //       len: [1]
        //     }
        //   },
        email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      name: {
        type: DataTypes.TEXT,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: true,
        validate: {
          len: [8]
        }
      },
      password: {
        type: DataTypes.STRING,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: false,
        
        // validate: {
        //   len: [8]
        // }
      },
      entry: {
        type: DataTypes.STRING,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: false,
        validate: {
          len: [6]
        }
      }
      // zipCode: {
      //   type: DataTypes.INTEGER,
      //   defaultValue: "55555"
      // },
      // dateHiked: {
      //   type: DataTypes.DATEONLY,
      //   defaultValue: "MM/DD/YYYY"
      // },
      // titleHike: {
      //   type: DataTypes.STRING,
      //   defaultValue: "Pacific Crest Trail"
      // },
      // individualRating: {
      //   type: DataTypes.INTEGER
      // }
    });
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.prototype.veriyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
    User.addHook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    return User;


  };
  
//   var Entry = sequelize.define("entry", {
//     entry: {
//         type: DataTypes.STRING(3000),
//         defaultValue: "I saw a bear!"
//       },
// }