const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    // password: "root",
    database: "userdetails"
})
pool.getConnection().then(()=>{
    console.log("Connected to the MySQL server successfully");
}).catch((err)=>{
    console.error("Error connecting to the MySQL server");
})

module.exports= {pool}