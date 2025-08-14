const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'client_order_system',
    port: 3306,
    connectionLimit: 10
});

module.exports = pool;
