"use strict";

module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define("Artist", {
    name: { type: DataTypes.STRING },
    url_image: DataTypes.STRING,
    provider: DataTypes.STRING,
    external_id: DataTypes.INTEGER
  });

  Artist.associate = models => {
    Artist.hasMany(models.Song);
  };
  return Artist;
};
