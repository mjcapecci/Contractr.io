const db = require('./db');

function selectUserForCookie(id) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM user WHERE VendorID = ${id}`;
    try {
      db.query(sql, (err, result) => {
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
    const sql = `SELECT * FROM user WHERE UniqUser = ${user}`;
    try {
      db.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function checkForWorker(id) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM worker WHERE UniqUser = ${id}`;
    try {
      db.query(sql, (err, result) => {
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
  checkForWorker,
};
