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

function checkForUsername(username) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM worker WHERE Username = '${username}'`;
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
    const sql = `INSERT INTO worker (UniqUser, Bio, WebsiteLink, Location, DisplayLocation, ContactEmail, Username) VALUES (${user}, '${workerInfo.bio}', '${workerInfo.website}', '${workerInfo.location}', '${workerInfo.displayLocation}', '${workerInfo.contactEmail}', '${workerInfo.username}')`;
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
    const sql = `UPDATE worker SET Username = '${workerInfo.username}', Bio = '${workerInfo.bio}', ContactEmail = '${workerInfo.contactEmail}', WebsiteLink = '${workerInfo.website}', Location = '${workerInfo.location}', DisplayLocation = '${workerInfo.displayLocation}' WHERE UniqUser = ${user};`;
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
  checkForUsername,
  addWorker,
  updateWorker,
};
