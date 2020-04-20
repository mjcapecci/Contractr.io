const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const asyncSQL = require('../utils/asyncSQL');

router.post('/', (req, res) => {
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

router.post('/add', async (req, res) => {
  const { skill } = req.body;
  const user = req.user[0].UniqUser;

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

module.exports = router;
