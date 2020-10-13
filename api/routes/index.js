const express = require('express');
const router = express.Router();

let users = [
  {
    username : 'user1',
    password : 'password'
  }
];

/* GET home page. */
router.get("/", function(req, res, next){
  res.send("API is working properly, connected to index.js ");
});

router.post('/login', function(req, res){
  let result = users.find(user => user.username == req.body.username);
  if(result){
    if(result.password == req.body.password){
      res.status(200).send({
        message: "Successful Login!"
      })
    }else{
      res.status(200).send({
        message: "Password Incorrect!"
      });
    }
  }else{
    res.status(200).send({
      message: "User not found!"
    });
  }
});



module.exports = router; 
