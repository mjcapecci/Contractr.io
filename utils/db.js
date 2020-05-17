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
  : mysql.createConnection(
      'mysql://mco6n42br6j1ghzz:uegxq3pt5rwf0s20@u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cxd152txegnl3npj'
    ));
module.exports = db;
