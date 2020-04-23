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
    SELECT a.WebsiteLink, a.Bio, a.Location, a.DisplayLocation, a.Username, b.NameOf, b.Photo FROM worker a
    INNER JOIN user b ON a.UniqUser = b.UniqUser
    INNER JOIN workerskilljt c
    ON a.UniqWorker = c.UniqWorker
    WHERE c.UniqSkill = (SELECT UniqSkill FROM skilltemp) && a.Location = ${location};
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
