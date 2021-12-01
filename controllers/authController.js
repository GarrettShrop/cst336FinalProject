const pool = require('../config/mySqlConnector');



exports.createAccount = async (req, res, next) => {
  try {
    res.render('create-account');
  }catch (err) {
    next(err);
  }
    
};


exports.loginGET = async (req, res, next) => {
    try {
      res.render('login');
    } catch (err) {
      next(err);
    }
  };
