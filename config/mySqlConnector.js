const mysql = require('mysql');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase} = require('./config');

// const connection = mysql.createConnection(process.env.'mysql://jox7vgipufqsc9yd:yuea4xnzkocghi8v@x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rwl3mosgwuhr2n4s')
// connection.connect();

let pool = mysql.createPool({
    connectionLimit : 10,
    host : DBHost,
    username : DBUser,
    password : DBPassword,
    database : DBDatabase
});

pool.query = util.promisify(pool.query);

module.exports = pool;