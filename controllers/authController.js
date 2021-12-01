const pool = require('../config/mySqlConnector');



// exports.create = async (req, res, next) => {
//     res.redirect('/');
// };


exports.loginGET = async (req, res, next) => {
    try {
      res.render('login');
    } catch (err) {
      next(err);
    }
  };
