module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("entry", {
        // id: {
            // type: DataTypes.INTEGER,
            // allowNull: false,
            // validate: {
            //   len: [1]
            // }
        // },
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      type: {
        type: DataTypes.STRING,
        // do we want to allow them not to have a name? if not I have the validation there
        allowNull: true,
        // validate: {
        //   len: [1]
        // }
      },
      description: {
        type: DataTypes.TEXT,
        defaultValue: "Pacific Crest Trail"
      },
      zipCode: {
        type: DataTypes.INTEGER,
        defaultValue: "55555"
      },
      dateHiked: {
        type: DataTypes.STRING,
        defaultValue: "MM/DD/YYYY"
      }
    //   individualRating: {
    //     type: DataTypes.INTEGER
    //   }
    // Maybe we should put the rating here? 
    });
    return Entry;


  };