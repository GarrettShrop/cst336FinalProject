const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 13;
const pool = require('../config/mySqlConnector')


exports.checkLoginInfo = async (req, res, next) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      sqlString = "SELECT * FROM users WHERE username LIKE ?";
      const result = await pool.query(sqlString, username);
      if (result.length === 0){
        return res.render('login',{loginError: "Invalid Credentials"})
      }

      const user = result[0];
      let correctPass = await bcrypt.compare(password, user.password)
      if(correctPass){
        res.redirect('/',{loginSuccess: "successfully logged In"})
      }
      else {
        return res.render('login',{loginError: "Invalid Credentials"})
      }

      
    } catch (error) {
      
    }
}

exports.createAccountPage = async (req, res, next) => {
  try {
    res.render('create-account');
  }catch (err) {
    next(err);
  }
    
};

exports.createAccount = async (req, res, next) => {
  try {
    // add in where password has to be more than 8 characters
    const username = req.body.username;
    const password = req.body.password;
    const hash = await bcrypt.hash(password, saltRounds);
    const post = { username: username, password: hash };
    await pool.query('INSERT INTO users SET ?', post);
    res.redirect('/');
  } catch (error) {
    res.sendStatus(400)
  }

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
