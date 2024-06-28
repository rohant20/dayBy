const express = require("express");
const db = require("../models/database");
const { userDB } = db;
const jwt = require("jsonwebtoken");

const headers = {
    "Access-Control-Allow-Origin": "http://localhost:5173",
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Max-Age': 2592000,
    "Content-Type": "application/json"
}


const formCheck = (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(username + email + password);
    if (username == '' || email == '' || password == '') {
        return res.json({
            filled: false
        });
    } else {
        next();
    }
}
//POST - User Information Upon Registering
const setUserCred = (req, res) => {
    const { username, email, password } = req.body;

    async function insertUserCred() {
        const results = await userDB.promise().query("INSERT INTO userInfo (userName, email, password) VALUES (?, ?, ?);", [username, email, password], (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Sucessfully registered");
            }
        });
        return results;
    }

    insertUserCred().then(data => {
        res.set(headers);
        res.json(data);
    }).catch(error => {
        console.error("Error posting data:", error);
    });
};

//Log In POST
const getUserCred = (req, res) => {
    const { username, password } = req.body;

    async function getUserCred() {
        const userInfo = await userDB.promise().query("SELECT * FROM userInfo WHERE userName = ?", [username], (err) => {
            if (err) {
                console.log(err);
            }
        });
        return userInfo;
    }

    const matchCreds = (data) => {
        const dbUserInfo = data[0][0];
        if (dbUserInfo != undefined && dbUserInfo.userName == username && dbUserInfo.password == password) {
            res.set(headers);
            res.json(data[0]);
        } else {
            console.log("Shit not matching up");
        }
    }

    getUserCred().then(data => {
        matchCreds(data);
    }).catch(error => {
        console.error("Error getting data:", error);
    });
}

module.exports = {
    setUserCred,
    getUserCred,
    formCheck
}