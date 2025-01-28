const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool(config.db).promise();

module.exports = pool;