const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const zip = require('zipcodes');

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

router.get('/', async (req, res) => {
  const { keyword, location } = req.query;
  const radiusQuery = await getRadius(location, 50);
  try {
    let sql = `
    CREATE TEMPORARY TABLE skilltemp
    SELECT * FROM skill WHERE NameOf = '${keyword}';
    SELECT a.WebsiteLink, a.Bio, a.Location, a.DisplayLocation, a.Username, b.NameOf, b.Photo FROM worker a
    INNER JOIN user b ON a.UniqUser = b.UniqUser
    INNER JOIN workerskilljt c
    ON a.UniqWorker = c.UniqWorker
    WHERE c.UniqSkill = (SELECT UniqSkill FROM skilltemp) && a.Location IN (${radiusQuery});
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

function getRadius(location, mileage) {
  return new Promise((resolve) => {
    let radiusCodesStr = '';
    let radiusCodes = zip.radius(location, mileage);
    radiusCodes.forEach((code) => {
      radiusCodesStr += `'${code.toString()}', `;
    });
    radiusCodesStr = radiusCodesStr.substring(0, radiusCodesStr.length - 2);
    resolve(radiusCodesStr);
  });
}

module.exports = router;
