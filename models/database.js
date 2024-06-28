require("dotenv").config();
const mysql = require("mysql2");
const { Schema } = mysql

let userDB = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "dayby"
});

userDB.connect((err) => {
    if (err) {
        console.error('Error connecting to the user database:', err);
        return;
    }
    console.log('Connected to the database.');
});


module.exports = {
    userDB
}
