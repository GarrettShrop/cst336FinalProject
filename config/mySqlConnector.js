const mysql = require('mysql');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase} = require('./config');


let pool = mysql.createPool({
    connectionLimit : 10,
    host : DBHost,
    username : DBUser,
    password : DBPassword,
    database : DBDatabase
});

pool.query = util.promisify(pool.query);

module.exports = pool;