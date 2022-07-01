var express = require('express');
var router = express.Router();
let userSchema=require('../Schema/schema');
let {encryptpwd,decryptpwd} = require('../Schema/crypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('working');
});

router.get('/display',async function(req,res){

  try{
    const result=await userSchema.find()
    res.json({
      message:"displaying records",
      result
    })
  }
  catch(error){
    console.log(error)
  }
});
router.post('/register',async function(req,res){

  try{
    const user=await userSchema.findOne({email:req.body.email})
    if(user)
    {
      res.send('user already exist')
    }
    else
    {
      const code=await encryptpwd(req.body.password);
      req.body.password=code
      await userSchema.create(req.body)
      res.send('account created')
    }
    }
    
  catch(error){
    console.log(error)
  }
});

router.post('/login',async function(req,res){
  try{
  const user=await userSchema.findOne({email:req.body.email})
  if(user)
  {
    let result=decryptpwd(req.body.password,user.password)
    if(result)
    {
      res.send('login success')

    }
    else{
      res.send('wrong password')
    }
  }
    else{
      res.send("kindly create account")

    }
}
    catch(error){
      console.log(error)
    } 
 
});




module.exports = router;