// const pool = require('../config/mySqlConnector');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var createConnection = require('../config/mySqlConnector');


// const checkLoginInfo = async (username, password) => {
//     if (username.length < 1) {

//     }

exports.createAccount = async (req, res, next) => {
  try {
    res.render('create-account');
  }catch (err) {
    next(err);
  }
    
};

exports.createAccountlogic = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const hash = await bcrypt.hash(password, saltRounds);

    
    const post = { username: username, password: hash };
    const result = await pool.query('INSERT INTO users SET ?', post);




    res.redirect('/');
};

exports.deleteAccount = async(req, res, next) => {

};

exports.updateAccount = async(req, res, next) => {
    res.render('update-account');
};

exports.loginGET = async (req, res, next) => {
    try {
      res.render('login');
    } catch (err) {
      next(err);
    }
  };
