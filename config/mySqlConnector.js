const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const { createConnection } = require('net');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase,JAWSDB_URL} = require('./config');

let pool = mysql.createPool({
    connectionLimit : 10,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host : DBHost,
    user : DBUser,
    password : DBPassword,
    database : DBDatabase,
    JAWSDB_URL: JAWSDB_URL
});

pool.query = util.promisify(pool.query);

module.exports = pool;