const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    DBHost:     process.env.HOST,
    DBUser:     process.env.DBUSER,
    DBPassword: process.env.DBPASSWORD,
    DBDatabase: process.env.DATABASE,
  };