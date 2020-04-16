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

function addWorker(user, workerInfo) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO worker (UniqUser, Bio, WebsiteLink, Location, DisplayLocation) VALUES (${user}, '${workerInfo.bio}', '${workerInfo.website}', '${workerInfo.location}', '${workerInfo.displayLocation}')`;
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

function updateWorker(user, workerInfo) {
  return new Promise((resolve) => {
    const sql = `UPDATE worker SET Bio = '${workerInfo.bio}', WebsiteLink = '${workerInfo.website}', Location = '${workerInfo.location}', DisplayLocation = '${workerInfo.displayLocation}' WHERE UniqUser = ${user};`;
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
  addWorker,
  updateWorker,
};
