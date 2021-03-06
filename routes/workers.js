const express = require('express');
const router = express.Router();
const workers_access = require('../data_access/workers_access');
const auth = require('../middleware/auth');

// @route   GET api/workers
// @desc    Checks to see if user's desired worker username exists already
// Private
router.get('/', auth, async (req, res) => {
  const worker = await workers_access.checkForWorker(req.user[0].UniqUser);
  res.status(201).send(worker);
});

// @route   POST api/workers
// @desc    Registers new worker profile to existing user account
// Private
router.post('/', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const workerInfo = req.body;
  await workers_access.addWorker(user, workerInfo);
  const worker = await workers_access.checkForWorker(req.user[0].UniqUser);
  res.send(worker);
});

// @route   PUT api/workers
// @desc    Updates worker info
// Private
router.put('/', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const workerInfo = req.body;
  await workers_access.updateWorker(user, workerInfo);
  const worker = await workers_access.checkForWorker(req.user[0].UniqUser);
  res.send(worker);
});

// @route   POST api/workers
// @desc    Adds new username to database to prevent duplicates
// Private
router.post('/username', auth, async (req, res) => {
  const username = req.body.username;
  const userExists = await workers_access.checkForUsername(username);
  if (userExists.length > 0) {
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
