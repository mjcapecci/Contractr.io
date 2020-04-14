const express = require('express');
const router = express.Router();
const asyncSQL = require('../utils/asyncSQL');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const worker = await asyncSQL.checkForWorker(req.user[0].UniqUser);
  res.json({ worker });
});

module.exports = router;
