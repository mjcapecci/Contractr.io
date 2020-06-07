const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const users_access = require('../data_access/users_access');

// @route   GET api/users
// @desc    Redirects user after verified login
// Private
router.get('/', auth, (req, res) => {
  res.redirect(301, 'https://www.contractr.io/');
});

// @route   GET api/users/auth
// @desc    Notifies the front end of the client's auth status
// Private
router.get('/auth', auth, (req, res) => {
  res.json({ isAuthenticated: true });
});

// @route   GET api/users/profile
// @desc    Provides private info of the logged-in user's profile
// Private
router.get('/profile', auth, (req, res) => {
  const user = req.user[0];
  res.status(200).json({
    name: user.NameOf,
    email: user.Email,
    photo: user.Photo,
    registrationDate: user.RegistrationDate,
    vendorName: user.VendorName,
  });
});

// @route   GET api/users/public
// @desc    Provides public info of a worker account found via search
// Public
router.get('/public', async (req, res) => {
  const username = req.query.username;
  const publicProfile = await users_access.getPublicProfile(username);
  const publicSkills = await users_access.getPublicSkills(username);
  res.json({ profile: publicProfile, skills: publicSkills });
});

// @route   POST api/users/public
// @desc    Terminates logged-in express cookies session
// Private
router.post('/logout', auth, (req, res) => {
  req.logOut();
  res.send('TEST');
});
module.exports = router;
