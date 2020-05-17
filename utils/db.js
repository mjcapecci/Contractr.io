const mysql = require('mysql');

let dbMode = process.env.NODE_ENV;

// Create db connection
const db = mysql.createConnection({
  multipleStatements: true,
  host: process.env.DB_PROD_HOST,
  user: process.env.DB_PROD_USER,
  password: process.env.DB_PROD_PASSWORD,
  database: process.env.DB_PROD_DATABASE,
});
module.exports = db;
