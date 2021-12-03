//const pool = require('../config/mySqlConnector');
const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10;
const pool = require('../config/mySqlConnector')


// const checkLoginInfo = async (username, password) => {
//     if (username.length < 1) {

//     }

exports.createAccountPage = async (req, res, next) => {
  try {
    res.render('create-account');
  }catch (err) {
    next(err);
  }
    
};

exports.createAccount = async (req, res, next) => {
  try {
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
