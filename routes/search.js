const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.post('/', (req, res) => {
  const { keywordField, locationField } = req.body;
  try {
    let sql = `INSERT INTO search (KeywordField, LocationField) VALUES ('${keywordField}','${locationField}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200);
      res.json({ keywordField, locationField });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', (req, res) => {
  const { keyword, location } = req.query;
  try {
    let sql = `
    CREATE TEMPORARY TABLE skilltemp
    SELECT * FROM skill WHERE NameOf = '${keyword}';
    SELECT * FROM worker
    INNER JOIN workerskilljt
    ON worker.UniqWorker = workerskilljt.UniqWorker
    WHERE workerskilljt.UniqSkill = (SELECT UniqSkill FROM skilltemp) && worker.Location = '${location}';
    DROP TEMPORARY TABLE skilltemp;
    `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.status(200);
      res.send(result);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
