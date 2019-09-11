var express = require("express");
var router = express.Router();
var db = require('../models');
var visitor = db.Visitor;
module.exports = function(){
    router.post('/saveinfo',function(req,res){
        console.log(req.body)
        visitor.create(req.body,(err,data)=>{
            if(err&& err.code === 11000){
                res.send('email already taken')
            }
            else{
                console.log(data);
                res.send('succesfully created user');
            }
        })
    })
}
