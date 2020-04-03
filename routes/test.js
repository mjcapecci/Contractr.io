const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/test1', (req, res) => {
  try {
    let testPost = { VendorID: '1', NameOf: 'Mark Woods' };
    let sql = `INSERT INTO user (VendorID, NameOf) VALUES (${testPost.VendorID},'${testPost.NameOf}')`;
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

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  let sql = `SELECT * FROM user WHERE UniqUser = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/', (req, res) => {
  try {
    let sql = `SELECT * FROM user`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
