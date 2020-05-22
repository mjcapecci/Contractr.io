const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const db = require('../utils/db');
const asyncSQL = require('../utils/asyncSQL');

// TODO: Refactor this into an UPSERT query

passport.serializeUser((user, done) => {
  done(null, user[0].UniqUser);
});

passport.deserializeUser(async (UniqId, done) => {
  const user = await asyncSQL.selectUniqIdForDeserialize(UniqId);
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
        console.log(profile);
        const sql = `INSERT INTO user (NameOf, VendorId, VendorName, Email, Photo) VALUES ('${profile.displayName}','${profile.id}', 'Google', '${profile.emails[0].value}', '${profile.photos[0].value}')`; // insert if not exists
        try {
          db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('User Added');
          });
        } catch (error) {
          console.error(error.message);
        }
        const result = await asyncSQL.selectUserForCookie(profile.id);
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
        const result = await asyncSQL.selectUserForCookie(profile.id);
        done(null, result);
      };
      checkForUser(profile.id);
    }
  )
);

// @route   GET api/auth/google
// @desc    Provides redirect token for Google OAuth2 Login
// Public
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// @route   GET api/auth/google
// @desc    Provides secondary token for Google OAuth2 Login
// Public
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/api/users');
});

module.exports = router;
