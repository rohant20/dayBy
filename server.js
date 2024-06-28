const express = require("express");
const cors = require("cors");
const db = require("./models/database");
const { userDB } = db;

const cookieParser = require("cookie-parser");

const { router } = require("./routes/authRoutes");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.use("/", router);
app.use("/", router);



// app.get("/api", (req, res) => {
//     async function getUserInfo() {
//         const results = await userDB.promise().query('SELECT * FROM userinfo');
//         return results;
//     }
//     getUserInfo().then(data => {
//         res.set(headers);
//         res.json(data[0]);
//     }).catch(error => {
//         console.error("Error fetching data:", error);
//     });
// });

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});
