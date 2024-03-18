const db_con = require("../Model/dbconn");
var express = require('express');
const { login } = require("./queries/queries");
var router = express.Router();
const jwt = require('jsonwebtoken');   

router.post('/login', (req, res) => {
  
    db_con.query(login, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.json({  msg: "ERROR"});
      if (data.length > 0) {
         res.status(200) // Extract username from the first result
        //  const token = jwt.sign({ id: data[0].id }, 'the-super-strong-secret', { expiresIn: '1h' });
        
         return res.json({ msg: "Wellcome, One Time Login" });
        
      } else {
        res.status(404)
        return res.json({  msg: "No Record" });
      }
    });
  });


  module.exports = router;