const sequelize = require('./db');
const User = require('./models/user');
const Book = require('./models/book');
const Review = require('./models/review');
const Genre = require('./models/genre');
const Author = require('./models/author');

// Define associations
User.hasMany(Review);
Review.belongsTo(User);

Book.hasMany(Review);
Review.belongsTo(Book);

Book.belongsToMany(Genre, { through: 'BookGenres' });
Genre.belongsToMany(Book, { through: 'BookGenres' });

Author.hasMany(Book);
Book.belongsTo(Author);

// Sync all defined models with the database
async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } to drop existing tables (careful!)
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    sequelize.close(); // Close the connection after syncing
  }
}

// Call the syncDatabase function to synchronize models with the database
syncDatabase();
