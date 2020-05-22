const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const asyncSQL = require('../utils/asyncSQL');
const auth = require('../middleware/auth');

// @route   POST api/skills
// @desc    Selects all skills associated with the posted worker
// Private
router.post('/', auth, (req, res) => {
  const { worker } = req.body;
  try {
    let sql = `
    SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
    INNER JOIN skill
    ON workerskilljt.UniqSkill = skill.UniqSkill
    WHERE workerskilljt.UniqWorker = ${worker}
    `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
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

  const skillExists = await asyncSQL.checkForSkill(skill);
  if (skillExists.length == 0) await asyncSQL.addSkillToPool(skill);
  const workerSkill = await asyncSQL.addWorkerSkill(user, skill);
  if (workerSkill != 'Error: Duplicate Entry') {
    try {
      let sql = `
      SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
      INNER JOIN skill
      ON workerskilljt.UniqSkill = skill.UniqSkill
      WHERE workerskilljt.UniqWorker = ${user}
      `;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).send(result);
      });
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

  await asyncSQL.deleteSkillFromWorker(user, initialSkill);
  const skillExists = await asyncSQL.checkForSkill(skill);
  if (skillExists.length == 0) await asyncSQL.addSkillToPool(skill);
  await asyncSQL.addWorkerSkill(user, skill);
  try {
    let sql = `
    SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
    INNER JOIN skill
    ON workerskilljt.UniqSkill = skill.UniqSkill
    WHERE workerskilljt.UniqWorker = ${user}
    `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
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
  await asyncSQL.deleteSkillFromWorker(user, skill);
  try {
    let sql = `
    SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
    INNER JOIN skill
    ON workerskilljt.UniqSkill = skill.UniqSkill
    WHERE workerskilljt.UniqWorker = ${user}
    `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).send(result);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
