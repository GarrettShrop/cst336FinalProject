const mysql = require('mysql');
const util = require('util');
const host = "x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	";
const username = "jox7vgipufqsc9yd	";
const password = "yuea4xnzkocghi8v";
const database = "rwl3mosgwuhr2n4s";

let pool = mysql.createPool({
    connectionLimit : 10,
    host : host,
    username : username,
    password : password,
    database : database
});

pool.query = util.promisify(pool.query);

module.exports = pool;