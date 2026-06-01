// ======================
// BACKEND BASICS
// ======================

// How the Web Works
// Browser(Client) --> Request --> Server
// Browser(Client) <-- Response <-- Server

// Client-Server Architecture
// Client requests data, Server processes and returns data

// Request-Response Cycle
// Request -> Processing -> Response



// ======================
// NODE.JS
// ======================

// Introduction to Node.js
// Run JavaScript outside browser

console.log("Hello Node.js");


// Node REPL
// Open terminal and type:
// node
// > 5 + 5


// Process Object
// Information about current Node process

console.log(process.version);
console.log(process.argv);


// Global Objects
// Available everywhere

console.log(__dirname);
console.log(__filename);

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);


// ======================
// MODULES
// ======================

// Reusable pieces of code

// Import module
const fs = require("fs");
const path = require("path");
const http = require("http");
const os = require("os");


// ======================
// BUILT-IN MODULES
// ======================

// fs (File System)
// Create file

fs.writeFileSync("demo.txt", "Hello World");


// path
// Work with file paths

console.log(path.basename(__filename));


// os
// Operating system information

console.log(os.platform());


// http
// Create basic server

const server = http.createServer((req, res) => {
    res.end("Hello from HTTP Server");
});

// server.listen(3000);


// ======================
// CUSTOM MODULES
// ======================

// math.js
/*
function add(a,b){
    return a+b;
}
module.exports=add;
*/

// app.js
/*
const add=require("./math");
console.log(add(2,3));
*/


// ======================
// NPM
// ======================

// Node Package Manager

// npm init -y
// Creates package.json

// npm install express
// Install package

// npm install -g nodemon
// Install globally


// package.json
/*
{
  "name":"project",
  "version":"1.0.0"
}
*/


// nodemon
// Automatically restarts server

// nodemon app.js



// ======================
// EXPRESS.JS
// ======================

const express = require("express");
const app = express();


// ======================
// EXPRESS MIDDLEWARE
// ======================

// Parse JSON requests

app.use(express.json());

// Parse Form Data

app.use(express.urlencoded({ extended: true }));


// ======================
// CUSTOM MIDDLEWARE
// ======================

// Runs before routes

app.use((req, res, next) => {
    console.log("Custom Middleware");
    next();
});


// ======================
// THIRD PARTY MIDDLEWARE
// ======================

// npm install morgan

/*
const morgan=require("morgan");
app.use(morgan("dev"));
*/


// ======================
// ROUTING
// ======================

// Home Route

app.get("/", (req, res) => {
    res.send("Home Page");
});

// About Route

app.get("/about", (req, res) => {
    res.send("About Page");
});


// ======================
// ROUTE PARAMETERS
// ======================

// Dynamic URL values

app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
});

// URL:
// /user/101


// Multiple Parameters

app.get("/user/:id/:name", (req, res) => {
    res.send(req.params);
});

// URL:
// /user/101/aditya


// ======================
// QUERY STRINGS
// ======================

// URL:
// /search?q=nodejs

app.get("/search", (req, res) => {
    res.send(req.query);
});


// ======================
// SENDING RESPONSES
// ======================

// Text Response

app.get("/text", (req, res) => {
    res.send("Hello World");
});


// HTML Response

app.get("/html", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});


// JSON Response

app.get("/json", (req, res) => {
    res.json({
        name: "Aditya",
        age: 21
    });
});


// ======================
// CREATE SERVER
// ======================

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});