const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const db = require('../utils/db');
passport.serializeUser((user, done) => {
  done(null, user[0].UniqUser);
});

passport.deserializeUser(async (id, done) => {
  const user = await selectIdForDeserialize(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      function checkForUser(id) {
        const sql = `SELECT * FROM user WHERE VendorID = ${id.toString()}`; // check if exists
        try {
          db.query(sql, (err, result) => {
            if (err) throw err;
            result.length === 0 ? addUser() : updateUser();
          });
        } catch (error) {
          console.log(error.message);
        }
      }
      const addUser = async () => {
        const sql = `INSERT INTO user (NameOf, VendorId, VendorName) VALUES ('${profile.displayName}','${profile.id}', 'Google')`; // insert if not exists
        try {
          db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('User Added');
          });
        } catch (error) {
          console.error(error.message);
        }
        const result = await selectUserForCookie(profile.id);
        done(null, result);
      };
      const updateUser = async () => {
        const sql = `UPDATE user SET LastLoginDate = CURRENT_TIMESTAMP WHERE VendorID = ${profile.id}`; // update if exists
        try {
          db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('User Updated');
          });
        } catch (error) {
          console.error(error.message);
        }
        const result = await selectUserForCookie(profile.id);
        done(null, result);
      };
      checkForUser(profile.id);
    }
  )
);

function selectUserForCookie(id) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM user WHERE VendorID = ${id}`;
    try {
      db.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function selectIdForDeserialize(user) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM user WHERE UniqUser = ${user}`;
    try {
      db.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(res.redirect('/api/users/'));
});

module.exports = router;
