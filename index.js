const express = require("express");



const productcontroller = require("./controller/product.controller.js")
const app = express();


// async..await is not allowed in global scope, must use a wrapper

 



app.use(express.json());
app.use("/users",productcontroller)

module.exports = app;