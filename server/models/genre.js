const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Genre = sequelize.define('Genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add other fields as needed
});

module.exports = Genre;
