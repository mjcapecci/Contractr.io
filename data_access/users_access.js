const db = require('../utils/db');

function getPublicProfile(username) {
  return new Promise((resolve) => {
    const sql = `
      SELECT a.WebsiteLink, a.DisplayLocation, a.Username, a.Bio, b.NameOf, b.RegistrationDate, b.Photo FROM worker a
      INNER JOIN user b ON a.UniqUser = b.UniqUser
      WHERE a.Username = ?
    `;
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

function getPublicSkills(username) {
  return new Promise((resolve) => {
    const sql = `
      SELECT a.NameOf FROM skill a
      INNER JOIN workerskilljt b ON a.UniqSkill = b.UniqSkill
      INNER JOIN worker c ON b.UniqWorker = c.UniqWorker
      WHERE c.Username = ?
    `;
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

module.exports = {
  getPublicProfile,
  getPublicSkills,
};
