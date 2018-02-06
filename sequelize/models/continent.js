'use strict';
module.exports = (sequelize, DataTypes) => {
  var Continent = sequelize.define('Continent', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Continent;
};