const express = require('express');
const router = express.Router();
const db = require('../utils/db');
const zip = require('zipcodes');

// @route   POST api/search
// @desc    Logs all user searches into database
// Public
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

// @route   GET api/search
// @desc    Retreives results from the database based on the corresponding user search
// Public
router.get('/', async (req, res) => {
  const { keyword, location } = req.query;
  if (!keyword || !location) {
    res.send('Please enter all search terms.');
    return;
  }
  const radiusQuery = await getRadius(location, 50);
  console.log(radiusQuery);
  try {
    let sql = `
    CREATE TEMPORARY TABLE skilltemp
    SELECT * FROM skill WHERE NameOf LIKE '%${keyword}%';
    
    SELECT a.WebsiteLink, a.Bio, a.Location, a.DisplayLocation, a.Username, b.NameOf, b.Photo FROM worker a
    INNER JOIN user b ON a.UniqUser = b.UniqUser
  	 INNER JOIN workerskilljt c
    ON a.UniqWorker = c.UniqWorker
    WHERE c.UniqSkill IN (SELECT UniqSkill FROM skilltemp) && a.Location IN (${radiusQuery});
    
    DROP TEMPORARY TABLE skilltemp;
    `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      let usernameFilter = new Map();
      let filteredResults = [];
      // Create username filter
      result[1].map((item) => {
        if (!usernameFilter.has(item.Username)) {
          usernameFilter.set(item.Username);
        }
      });
      // Utilize username filter
      result[1].map((item) => {
        if (usernameFilter.has(item.Username)) {
          usernameFilter.delete(item.Username);
          filteredResults.push(item);
        }
      });
      res.status(200);
      res.send(filteredResults);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

function getRadius(location, mileage) {
  location = location.replace(/\D/g, '');
  return new Promise((resolve) => {
    if (location) {
      let radiusCodesStr = '';
      let radiusCodes = zip.radius(location, mileage);
      radiusCodes.forEach((code) => {
        radiusCodesStr += `'${code.toString()}', `;
      });
      radiusCodesStr = radiusCodesStr.substring(0, radiusCodesStr.length - 2);
      resolve(radiusCodesStr);
    } else {
      resolve('00000');
    }
  });
}

module.exports = router;
