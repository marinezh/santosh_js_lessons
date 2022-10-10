const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdbnew',
});

connection.connect();

connection.query('select * from task', (error, results, fields) => {
    if (error) {
        return console.log(error);
    }
     return console.log(results);
})
 
connection.end();