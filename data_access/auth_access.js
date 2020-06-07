const db = require('../utils/db');

function selectUserForCookie(id) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM user WHERE VendorID = ?`;
    try {
      db.query(sql, [id], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function selectUniqIdForDeserialize(user) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM user WHERE UniqUser = ?`;
    try {
      db.query(sql, [user], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

module.exports = {
  selectUserForCookie,
  selectUniqIdForDeserialize,
};
