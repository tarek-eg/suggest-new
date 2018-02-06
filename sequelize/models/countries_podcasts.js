'use strict';
module.exports = (sequelize, DataTypes) => {
  var countries_podcasts = sequelize.define('countries_podcasts', {
    audience: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return countries_podcasts;
};