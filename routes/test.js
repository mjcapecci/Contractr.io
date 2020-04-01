const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/test1', (req, res) => {
  let testPost = { VendorID: '1', NameOf: 'Dan Johnson' };
  let sql = `INSERT INTO user (VendorID, NameOf) VALUES (${testPost.VendorID},'${testPost.NameOf}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Post 1...');
  });
});

router.get('/test/:id', (req, res) => {
  console.log(req.params.id);
  let sql = `SELECT * FROM user WHERE UniqUser = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Data is served');
  });
});

module.exports = router;
