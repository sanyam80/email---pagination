const express = require("express");
const router = express.Router();
const transporter = require("../config/mail.js")

const product = require("../models/product.model.js");

router.get("/",async(req,res)=>{
    try{
        const page = req.query.page;
        const pagesize = req.query.pagesize;
        const skip = (page-1)*pagesize;
        if(pagesize>50){
            return res.send("please put the pazesize less than 50")
        }
        const user = await product.find().skip(skip).limit(pagesize).lean().exec();
        const totalpages = Math.ceil( await product.find().countDocuments()/pagesize)
        return res.send({user,totalpages});
    }
    catch{
        return res.send("something went wrong");
    }

});
router.post("/",async(req,res)=>{
    try {
        const user = await product.create(req.body);
          transporter.sendMail({
            from: '"Amazon admin" <admin@amazon.com>', // sender address
            to: user.sellerEmail, // list of receivers
            subject: "Your product is successfully upload", // Subject line
            text: "Hello sir", // plain text body
            html: "<b>Hello sir</b>", // html body
          });
          return res.send("your product created successfully created")
            
        
    } catch{
        return res.send("something went wrong")
    }
  
        
        
    
})

module.exports = router;