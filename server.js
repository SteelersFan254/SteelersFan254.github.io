require("dotenv").config();
const express = require('express');
const port = process.env.PORT || 8080;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

if(process.env.NODE_ENV === "production"){  
  app.use("*", function(req, res){
      res.sendFile(path.join(__dirname, "/client/build/index.html"));
  })
}
app.listen(port);