
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
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      name: {
        type: DataTypes.TEXT,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: true,
        // validate: {
        //   len: [1]
        // }
      },
      password: {
        type: DataTypes.STRING,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: false,
        validate: {
          len: [6]
        }
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
    return User;


  };
  
//   var Entry = sequelize.define("entry", {
//     entry: {
//         type: DataTypes.STRING(3000),
//         defaultValue: "I saw a bear!"
//       },
// }