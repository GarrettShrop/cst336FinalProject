const bcrypt = require('bcrypt');
const { response } = require('express');
const {TokenSecret, SaltRounds} = require('../config/config');
const pool = require('../config/mySqlConnector')
const jwt = require('jsonwebtoken')



const makeToken = async (res, user_id, username ) => {
  const token = jwt.sign(
    {user_id, username},
    TokenSecret,
    { expiresIn: '7d' }
  );
  console.log(token)
  res.cookie(
    'token',
    token,
    { expires: new Date(Date.now() + 8 * 360000),
      secure: true,
      httpOnly: true,
  },
  );
};

exports.profile = async (req, res, next) => {
  
};

exports.verifyToken = async (req, res, next) => {
  try{
    console.log(req.cookies)
    const token = req.cookies.token || '';
    if(!token) {
      res.redirect('/');
    }
    const identity = await jwt.verify(token, TokenSecret);
    req.identity = {
      id: identity.id,
      username: identity.username,

    };

  } catch (err) {
    next(err);
  }
};


// exports.checkLoginInfo = async (req, res, next) => {
//     try {
//       const username = req.body.username;
//       const password = req.body.password;
//       sqlString = "SELECT * FROM users WHERE username LIKE ?";
//       const result = await pool.query(sqlString, username);
//       if (result.length === 0){
//         return res.render('login',{loginError: "Invalid Credentials"})
//       }

//       const user = result[0];
//       let correctPass = await bcrypt.compare(password, user.password)
//       if(correctPass){
//         res.redirect('/',{loginSuccess: "successfully logged In"})
//       }
//       else {
//         return res.render('login',{loginError: "Invalid Credentials"})
//       }

      
//     } catch (error) {
      
//     }
// }

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
    const hash = await bcrypt.hash(password, SaltRounds);
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

  exports.checkLoginInfo = async (req,res,next) => {
    let username = req.body.username;
    let password = req.body.pwd;

    let passwordHash = "";

    let sql = `SELECT * FROM users WHERE username = ?`;

    let data = await pool.query(sql, [username]);
    
    if (data.length === 0) {
      return res.render("login", { "error": "Error: Invalid credentials!" });
    }
    
    const user = data[0]
    
    
    let match = await bcrypt.compare(password, user.password);
    
    if (match) {
      await makeToken(res, user.id, user.username);
      // req.session.authenticated = true;
      // req.session.username = username;
      // req.session.userID = data[0].id;
      
      res.redirect("/");
    }
    else {
      res.render("login", { "error": "Error: Invalid credentials!" });
    }
  };
  exports.logoutPOST = async (req, res, next) => {
    try {
      res.locals.username = null;
      res.clearCookie('token',
      { 
        expires: new Date(Date.now() + 8 * 3600000),
        secure: false, // TODO switch to true with https
        httpOnly: true,
      })
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  };
  