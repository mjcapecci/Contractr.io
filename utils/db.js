const mysql = require('mysql');

let dbMode = process.env.NODE_ENV;

// Create db connection
const db = (dbMode = 'DEV'
  ? mysql.createConnection({
      multipleStatements: true,
      host: process.env.DB_DEV_HOST,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASSWORD,
      database: process.env.DB_DEV_DATABASE,
    })
  : mysql.createConnection(process.env.JAWSDB_MARIA_URL));
module.exports = db;
