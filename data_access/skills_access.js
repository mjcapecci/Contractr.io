const db = require('../utils/db');

function checkForSkill(skill) {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM skill WHERE NameOf = ?`;
    try {
      db.query(sql, [skill], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function selectSkillsByWorkerId(worker) {
  return new Promise((resolve) => {
    const sql = `
      SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
      INNER JOIN skill
      ON workerskilljt.UniqSkill = skill.UniqSkill
      WHERE workerskilljt.UniqWorker = ?
    `;
    try {
      db.query(sql, [worker], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function selectSkillsByUserId(user) {
  return new Promise((resolve) => {
    const sql = `
      SELECT workerskilljt.UniqSkill, skill.NameOf FROM workerskilljt
      INNER JOIN skill
      ON workerskilljt.UniqSkill = skill.UniqSkill
      WHERE workerskilljt.UniqWorker = ?
    `;
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

function addSkillToPool(skill) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO skill (NameOf) VALUES (?)`;
    try {
      db.query(sql, [skill], (err, result) => {
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
    const sql = `
      INSERT INTO workerskilljt(UniqWorker, UniqSkill) SELECT
      (SELECT UniqWorker FROM worker WHERE UniqUser = ?), skill.UniqSkill
      FROM skill WHERE skill.NameOf = ?
    `;
    try {
      db.query(sql, [user, skill], (err, result) => {
        if (err) {
          if (err.code == 'ER_DUP_ENTRY') {
            resolve('Error: Duplicate Entry');
            return;
          }
          throw err;
        }
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
      WHERE UniqWorker = (SELECT UniqWorker FROM worker WHERE UniqUser = ?) && UniqSkill = ?
    `;
    try {
      db.query(sql, [user, skill], (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

module.exports = {
  checkForSkill,
  selectSkillsByWorkerId,
  selectSkillsByUserId,
  addSkillToPool,
  addWorkerSkill,
  deleteSkillFromWorker,
};
