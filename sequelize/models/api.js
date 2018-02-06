"use strict";
module.exports = (sequelize, DataTypes) => {
  var api = sequelize.define(
    "Api",
    {
      brand: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return api;
};
