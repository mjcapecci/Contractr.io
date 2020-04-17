const express = require('express');
const router = express.Router();
const asyncSQL = require('../utils/asyncSQL');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const worker = await asyncSQL.checkForWorker(req.user[0].UniqUser);
  res.status(201).send(worker);
});

router.post('/', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const workerInfo = req.body;
  await asyncSQL.addWorker(user, workerInfo);
  const worker = await asyncSQL.checkForWorker(req.user[0].UniqUser);
  res.send(worker);
});

router.put('/', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const workerInfo = req.body;
  await asyncSQL.updateWorker(user, workerInfo);
  const worker = await asyncSQL.checkForWorker(req.user[0].UniqUser);
  res.send(worker);
});

router.post('/username', auth, async (req, res) => {
  const username = req.body.username;
  const userExists = await asyncSQL.checkForUsername(username);
  if (userExists.length > 0) {
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
