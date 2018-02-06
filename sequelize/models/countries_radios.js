'use strict';
module.exports = (sequelize, DataTypes) => {
  var countries_radios = sequelize.define('countries_radios', {
    audience: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return countries_radios;
};