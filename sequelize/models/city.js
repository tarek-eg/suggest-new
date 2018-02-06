"use strict";
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define("City", {
    name: DataTypes.STRING,
    lattitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  });
  return City;
};
