const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Author = sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: {
    type: DataTypes.TEXT,
  },
  // Add other fields as needed
});

module.exports = Author;
