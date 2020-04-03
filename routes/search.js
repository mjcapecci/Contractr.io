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
      res.send(result);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
