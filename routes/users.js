const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  res.redirect(301, 'http://localhost:3000');
});

module.exports = router;
