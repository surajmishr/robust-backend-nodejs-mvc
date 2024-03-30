
const userModel = require('../models/userModel');

const userController = {
  addUser: async (req, res) => {

   const rowdata=  {
        user_id: 1,
        username: 'John',
        email: 'john@example.com',
        pwd: '30'
      };

      const mytable = 'user'; // Define mytable here

    try {
    
      const result = await userModel.insertUser(rowdata, mytable);

      // Extract relevant information from the result
      const responseData = {
        message: 'User inserted successfully',
        insertId: result.insertId // Assuming the result contains the inserted row ID
      };

      // Send the response without circular references
      res.status(201).json(responseData);


    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  

  
};

module.exports = userController;
