const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const asyncSQL = require('../utils/asyncSQL');

router.get('/', auth, (req, res) => {
  res.redirect(301, 'http://localhost:3000');
});

router.get('/auth', auth, (req, res) => {
  res.json({ isAuthenticated: true });
});

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

router.get('/public', auth, async (req, res) => {
  const username = req.query.username;
  const publicProfile = await asyncSQL.getPublicProfile(username);
  const publicSkills = await asyncSQL.getPublicSkills(username);
  res.json({ profile: publicProfile, skills: publicSkills });
});

module.exports = router;
