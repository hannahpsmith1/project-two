module.exports = function(sequelize, DataTypes) {
    var Hikes = sequelize.define("hikes", {
        hikeID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      hikeImage: {
        type: DataTypes.STRING,
        // defaultValue: "Pacific Crest Trail"
      },
      hikeName: {
        type: DataTypes.STRING,
        allowNull: true,

      },
      hikeLocation: {
        type: DataTypes.TEXT,
        defaultValue: "Pacific Crest Trail"
      },
      hikeDistance: {
        type: DataTypes.INTEGER,
        defaultValue: "55555"
      },

      aggregateRating: {
        type: DataTypes.INTEGER
      },
      hikeSummary: {
        type: DataTypes.TEXT,
        defaultValue: "Beautiful HIke"
      }
    });
    return Hikes;


  };