const express = require("express");
const app = express();

app.get("/get", (req,res) => res.send("Hi"));

app.listen(8080,()=> console.log('The server is running on port 8080'))
