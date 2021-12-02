const mysql = require('mysql');
const util = require('util');
const {DBHost, DBUser, DBPassword, DBDatabase,JAWDB_URL} = require('./config');

var connection = mysql.createConnection(process.env.JAWSDB_URL);

// var connection = mysql.createConnection(process.env.JAWDB_URL);
// connection.connect();

// let pool = mysql.createPool({
//     connectionLimit : 10,
//     host : DBHost,
//     username : DBUser,
//     password : DBPassword,
//     database : DBDatabase,
//     JAWDB_URL: JAWDB_URL
// });

// var getConnection = function(callback) {
//     pool.getConnection(function(err, connection) {
//         callback(err, connection);
//     });
// };



// pool.query = util.promisify(pool.query);

module.exports = connection;

