var mysql = require('mysql');

// Create a connection pool instead of a single connection
var db_con = mysql.createPool({
  
    host: '135.181.140.122',
    user: "lihsorgp_admin",
    password: "3aEzhdm{X8=2",
    database: 'lihsorgp_Lihs'
});

// Attempt to connect to the database
db_con.getConnection(function(err, connection) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database successfully!');
    connection.release(); // Release the connection back to the pool
});

// Export the connection pool
module.exports = db_con;
