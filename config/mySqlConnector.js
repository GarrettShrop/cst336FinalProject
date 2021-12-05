const mysql = require('mysql');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase,JAWSDB_URL} = require('./config');

let pool = mysql.createPool({
    connectionLimit : 1,
    host : DBHost,
    user : DBUser,
    password : DBPassword,
    database : DBDatabase,
    JAWSDB_URL: JAWSDB_URL
});

pool.query = util.promisify(pool.query);

module.exports = pool;
