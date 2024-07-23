const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book_review_app', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // Disable logging (default: console.log)
});

module.exports = sequelize;
