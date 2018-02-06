"use strict";
module.exports = (sequelize, DataTypes) => {
  var Song = sequelize.define("Song", {
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    provider: DataTypes.STRING,
    external_id: DataTypes.INTEGER
  });

  Song.associate = models => {
    Song.belongsTo(models.Artist);
  };

  return Song;
};
