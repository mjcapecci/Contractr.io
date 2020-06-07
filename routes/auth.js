const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const db = require('../utils/db');
const auth_access = require('../data_access/auth_access');

// TODO: Refactor this into an UPSERT query

passport.serializeUser((user, done) => {
  done(null, user[0].UniqUser);
});

passport.deserializeUser(async (UniqId, done) => {
  const user = await auth_access.selectUniqIdForDeserialize(UniqId);
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
        try {
          db.query(
            `SELECT * FROM user WHERE VendorID = ?`,
            [id],
            (err, result) => {
              if (err) throw err;
              result.length === 0 ? addUser() : updateUser();
            }
          );
        } catch (error) {
          console.log(error.message);
        }
      }
      const addUser = async () => {
        try {
          db.query(
            `INSERT INTO user (NameOf, VendorId, VendorName, Email, Photo) VALUES (?, ?, ?, ?, ?)`,
            [
              profile.displayName,
              profile.id,
              'Google',
              profile.emails[0].value,
              profile.photos[0].value,
            ],
            (err, result) => {
              if (err) throw err;
              console.log('User Added');
            }
          );
        } catch (error) {
          console.error(error.message);
        }
        const result = await auth_access.selectUserForCookie(profile.id);
        done(null, result);
      };
      const updateUser = async () => {
        try {
          db.query(
            `UPDATE user SET LastLoginDate = CURRENT_TIMESTAMP WHERE VendorID = ?`,
            [profile.id],
            (err, result) => {
              if (err) throw err;
              console.log('User Updated');
            }
          );
        } catch (error) {
          console.error(error.message);
        }
        const result = await auth_access.selectUserForCookie(profile.id);
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
