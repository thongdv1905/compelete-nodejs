const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'nodecomplete',
    host:'3000'
});

module.exports = pool.promise();