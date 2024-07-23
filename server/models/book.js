const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
  },
  // Add other fields as needed
});

module.exports = Book;
