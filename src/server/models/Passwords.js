const uuid = require('uuid'); // ES5
var Sequelize = require('sequelize');
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Password = sequelize.define("Password", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    password: {
      type: Sequelize.STRING,
      // added unique attribute
      unique: true
    }
  })
  return Password;
};
