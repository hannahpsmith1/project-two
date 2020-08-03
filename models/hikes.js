module.exports = function(sequelize, DataTypes) {
    var Hikes = sequelize.define("hikes", {
      //   hikeID: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   validate: {
      //     len: [1]
      //   }
      // },
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



  // <input type="radio" name="rating" onclick="myFunction(this.value)" value="1">1<br>
  // <input type="radio" name="rating" onclick="myFunction(this.value)" value="2">2<br>
  // <input type="radio" name="rating" onclick="myFunction(this.value)" value="3">3<br>
  //   <input type="radio" name="rating" onclick="myFunction(this.value)" value="4">4<br>
  // <input type="radio" name="rating" onclick="myFunction(this.value)" value="5">5<br>