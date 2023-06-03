var express = require('express');
const testModel = require('../models/test.model');

var router = express.Router();

router.get('/',async function(req,res,next){

    console.log("Iam triggered",req)

    const resp=await testModel.create({name:"this is my name",age:30});

    res.status(200).json(resp);

});

module.exports=router