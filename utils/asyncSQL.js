const db = require('./db');

// ------ Auth
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
// --------------

// ------- Worker
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
    const sql = `UPDATE worker SET Bio = '${workerInfo.bio}', ContactEmail = '${workerInfo.contactEmail}', WebsiteLink = '${workerInfo.website}', Location = '${workerInfo.location}', DisplayLocation = '${workerInfo.displayLocation}' WHERE UniqUser = ${user};`;
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

function getPublicProfile(username) {
  return new Promise((resolve) => {
    const sql = `SELECT a.WebsiteLink, a.DisplayLocation, a.Username, a.Bio, b.NameOf, b.RegistrationDate, b.Photo FROM worker a
    INNER JOIN user b ON a.UniqUser = b.UniqUser
    WHERE a.Username = '${username}'`;
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
// --------------

// ------ Skill
function checkForSkill(skill) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM skill WHERE NameOf = '${skill}'`;
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

function getPublicSkills(username) {
  return new Promise((resolve) => {
    const sql = `SELECT a.NameOf FROM skill a
    INNER JOIN workerskilljt b ON a.UniqSkill = b.UniqSkill
    INNER JOIN worker c ON b.UniqWorker = c.UniqWorker
    WHERE c.Username = '${username}'`;
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

function addSkillToPool(skill) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO skill (NameOf) VALUES ('${skill}')`;
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

function addWorkerSkill(user, skill) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO workerskilljt(UniqWorker, UniqSkill) SELECT
    (SELECT UniqWorker FROM worker WHERE UniqUser = ${user}), skill.UniqSkill
     FROM skill WHERE skill.NameOf = '${skill}';`;
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

function deleteSkillFromWorker(user, skill) {
  return new Promise((resolve) => {
    let sql = `
    DELETE FROM workerskilljt
    WHERE UniqWorker = (SELECT UniqWorker FROM worker WHERE UniqUser = ${user}) && UniqSkill = ${skill}
    `;
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
// --------------

module.exports = {
  selectUserForCookie,
  selectUniqIdForDeserialize,
  checkForWorker,
  checkForUsername,
  addWorker,
  updateWorker,
  getPublicProfile,
  checkForSkill,
  getPublicSkills,
  addSkillToPool,
  addWorkerSkill,
  deleteSkillFromWorker,
};
