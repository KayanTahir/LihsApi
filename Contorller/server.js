const express = require("express");
const cors = require("cors");
const http = require('http')
const indexRouter = require('../Contorller/router')

// dependenies for socket.io
const app = express();
app.use(cors());

app.use(express.json());
// app.use(express.static('img'))

// parse requests of content-type - application/x-www-form-urlencoded - parses incoming requests with URL-encoded payloads 
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);
//Routering the api
app.use('/api', indexRouter);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
// set port, listen for requests
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});