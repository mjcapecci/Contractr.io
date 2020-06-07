const db = require('../utils/db');

function checkForWorker(id) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM worker WHERE UniqUser = ?`;
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

function checkForUsername(username) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM worker WHERE Username = ?`;
    try {
      db.query(sql, [username], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function addWorker(user, workerInfo) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO worker (UniqUser, Bio, WebsiteLink, Location, DisplayLocation, ContactEmail, Username) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    try {
      db.query(
        sql,
        [
          user,
          workerInfo.bio,
          workerInfo.website,
          workerInfo.location,
          workerInfo.displayLocation,
          workerInfo.contactEmail,
          workerInfo.username,
        ],
        (err, result) => {
          if (err) throw err;
          resolve(result);
        }
      );
    } catch (error) {
      resolve(error.message);
    }
  });
}

function updateWorker(user, workerInfo) {
  return new Promise((resolve) => {
    const sql = `UPDATE worker SET Bio = ?, ContactEmail = ?, WebsiteLink = ?, Location = ?, DisplayLocation = ? WHERE UniqUser = ?`;
    try {
      db.query(
        sql,
        [
          workerInfo.bio,
          workerInfo.contactEmail,
          workerInfo.website,
          workerInfo.location,
          workerInfo.displayLocation,
          user,
        ],
        (err, result) => {
          if (err) throw err;
          resolve(result);
        }
      );
    } catch (error) {
      resolve(error.message);
    }
  });
}

module.exports = {
  checkForWorker,
  checkForUsername,
  addWorker,
  updateWorker,
};
