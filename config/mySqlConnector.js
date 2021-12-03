const mysql = require('mysql');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase,JAWDB_URL} = require('./config');

let pool = mysql.createPool({
    connectionLimit : 10,
    host : DBHost,
    user : DBUser,
    password : DBPassword,
    database : DBDatabase,
    JAWDB_URL: JAWDB_URL
});

pool.query = util.promisify(pool.query);

module.exports = pool;
