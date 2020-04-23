const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const auth = require('../middleware/auth');

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

router.get('/public', auth, (req, res) => {
  const username = req.query.username;
  res.send(username);
});

module.exports = router;
