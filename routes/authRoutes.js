const express = require("express");
const router = express.Router();
const cors = require("cors");
const { setUserCred, getUserCred, formCheck } = require("../controllers/authController");


//middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173"
    })
);
router.use(formCheck);

router.post("/signup", setUserCred);
router.post("/login", getUserCred);

module.exports = {
    router
}