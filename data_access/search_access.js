const db = require('../utils/db');

function insertSearch(keywordField, locationField) {
  return new Promise((resolve) => {
    const sql = `INSERT INTO search (KeywordField, LocationField) VALUES (?, ?)`;
    try {
      db.query(sql, [keywordField, locationField], (err, result) => {
        if (err) throw err;
        resolve({ keywordField, locationField });
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

function getSearchResults(keyword, radiusQuery) {
  keyword = `%${keyword}%`;
  return new Promise((resolve) => {
    const sql = `
        CREATE TEMPORARY TABLE skilltemp
        SELECT * FROM skill WHERE NameOf LIKE ?;

        SELECT a.WebsiteLink, a.Bio, a.Location, a.DisplayLocation, a.Username, b.NameOf, b.Photo FROM worker a
        INNER JOIN user b ON a.UniqUser = b.UniqUser
        INNER JOIN workerskilljt c
        ON a.UniqWorker = c.UniqWorker
        WHERE c.UniqSkill IN (SELECT UniqSkill FROM skilltemp) && a.Location IN (${radiusQuery});

        DROP TEMPORARY TABLE skilltemp;
    `;
    try {
      db.query(sql, [keyword], (err, result) => {
        if (err) throw err;
        let usernameFilter = new Map();
        let filteredResults = [];
        // Create username filter
        result[1].map((item) => {
          if (!usernameFilter.has(item.Username)) {
            usernameFilter.set(item.Username);
          }
        });
        // Utilize username filter
        result[1].map((item) => {
          if (usernameFilter.has(item.Username)) {
            usernameFilter.delete(item.Username);
            filteredResults.push(item);
          }
        });
        resolve(filteredResults);
      });
    } catch (error) {
      resolve(error.message);
    }
  });
}

module.exports = {
  insertSearch,
  getSearchResults,
};
