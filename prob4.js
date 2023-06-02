//this is pulling the express validator
const {check} = require("express-validator");
//contains an array called signup validator that is checking for name and email then password
exports.signupValidation = [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a vaild email").isEmail().normalizeEmail({
        gmail_remove_dots: true}),
        check ("password", "Password must be 6 or more characters").isLength({min:6})
]
//contains an array that export loginValidation to check email and password
exports.loginValidation = [
    check("email", "Please include a vaild email").isEmail().normalizeEmail({
        gmail_remove_dots: true}),
        check("password", "Password must be 6 or more characters").isLength({min: 6})
]

//pull from modules required by applications
const createError = require("http-errors");

//pull from modules required by applications
const express = require("express");

//pull from modules required by applications
const path = require("path");

//pull from modules required by applications
const bosyParser = require("body-parser");

//pull from modules required by applications
const cors = require("cors");

//pull from modules required by applications
const {signupValidation, loginValidation} = require("./validation.js");
//pull from modules required by applications


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

//Getting the url to send a response to get request with string
app.get("/", (req, res)=>{
    res.send("Node js file upload rest apis");
});

//routes the register URL that responds to post request
app.post("/register", signupValidation,(req, res, next)=>{
    //your registradtion code
});
//routes that the login url that responds to POST request
app.post("/login", loginValidation,(req, res, next)=>{
    //your login code
});
// Handling Errors
//if there is erron it will find and respond
app.use((err, req, res, next)=> {
    //console.log(err);
    //err pulling errcode 500
    err.statusCode = err.statusCode || 500;
    // pull error message with string
    err.message = err.message || "Internal Server Error";
    
    //respond status as error status in json file
    res.status(err.statusCode).json({
        //json error message
        message: err.message,
    });
});
//calling on app to run server.
app.listen(3000, ()=> console.log("Server is running on port 3000"));