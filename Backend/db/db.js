const mongoose = require('mongoose');



function connectDB() {
  mongoose.connect(process.env.DB_CONNECT)
  .then(() => {
    
    console.log('Connected to DB');
  })
}

module.exports = connectDB;