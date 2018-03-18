const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const keys = require('./config/keys');
const passport = require('passport');

//app configurations

mongoose.connect(keys.mongoURI);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

//Routing
app.get("/", (req, res) => {
    res.json({error:"Unsupported"});
});

app.use("/api/auth", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running");
});