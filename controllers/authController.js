const pool = require('../config/mySqlConnector');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// const checkLoginInfo = async (username, password) => {
//     if (username.length < 1) {

//     }

// };

exports.createAccount = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const hash = await bcrypt.hash(password, saltRounds);
    const post = { username: username, password: hash };
    const result = await pool.query('INSERT INTO users SET ?', post);




    res.redirect('/');
};


exports.loginGET = async (req, res, next) => {
    try {
      res.render('login');
    } catch (err) {
      next(err);
    }
  };
