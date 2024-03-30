
const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust this value based on your requirements
  host: 'localhost', // Replace 'localhost' with your MySQL host
  user: 'root', // Replace 'your_username' with your MySQL username
  password: '', // Replace 'your_password' with your MySQL password
  database: 'jwtapi' // Replace 'your_database_name' with your MySQL database name
});

// Check if the connection is successful
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.message);
    throw err; // Throw an error to stop execution if connection fails
  } else {
    console.log('Connected to MySQL database successfully!');
    connection.release(); // Release the connection
  }
});

// Export the pool to be used in other modules
module.exports = pool;
