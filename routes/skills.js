const express = require('express');
const router = express.Router();
const skills_access = require('../data_access/skills_access');
const auth = require('../middleware/auth');

// @route   POST api/skills
// @desc    Selects all skills associated with the posted worker
// Private
router.post('/', auth, async (req, res) => {
  const { worker } = req.body;
  try {
    const result = await skills_access.selectSkillsByWorkerId(worker);
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// @route   POST api/skills/add
// @desc    Adds skill the the corresponding worker
// Private
router.post('/add', auth, async (req, res) => {
  const { skill } = req.body;
  const user = req.user[0].UniqUser;

  const skillExists = await skills_access.checkForSkill(skill);
  if (skillExists.length === 0) await skills_access.addSkillToPool(skill);
  const workerSkill = await skills_access.addWorkerSkill(user, skill);
  if (workerSkill != 'Error: Duplicate Entry') {
    try {
      const result = await skills_access.selectSkillsByUserId(user);
      res.status(200).send(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(200).send('Duplicate Entry');
  }
});

// @route   PUT api/skills/:skill
// @desc    Updates the selected worker skill
// Private
router.put('/:skill', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const skill = req.params.skill;
  const initialSkill = req.body.initialSkill;

  await skills_access.deleteSkillFromWorker(user, initialSkill);
  const skillExists = await skills_access.checkForSkill(skill);
  if (skillExists.length == 0) await skills_access.addSkillToPool(skill);
  await skills_access.addWorkerSkill(user, skill);
  try {
    const result = await skills_access.selectSkillsByUserId(user);
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// @route   DELETE api/skills/:skill
// @desc    Deletes selected skill from workerskilljt table only
// Private
router.delete('/:skill', auth, async (req, res) => {
  const user = req.user[0].UniqUser;
  const skill = req.params.skill;
  await skills_access.deleteSkillFromWorker(user, skill);
  try {
    const result = await skills_access.selectSkillsByUserId(user);
    res.status(200).send(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
