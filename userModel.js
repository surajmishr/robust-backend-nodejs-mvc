
const db = require('../connection/connection');
const sqlstring = require('sqlstring'); // Import sqlstring for sanitization

const userModel = {
  insertUser: async (userData, tableName) => {
    try {
      // Sanitize table name
      const safeTableName = sqlstring.escapeId(tableName);
      
      // Perform database operation to add user
      const query = `INSERT INTO ${safeTableName} SET ?`;
      const result = await db.query(query, userData);
      
      return result; // Return the result of the database operation
    } catch (error) {
      // Handle errors gracefully
      console.error('Error inserting user:', error);
      throw error; // Re-throw the error for upstream handling
    }
  },
  // Define other model methods as needed...
};

module.exports = userModel;
