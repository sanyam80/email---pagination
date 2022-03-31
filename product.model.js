const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    sellerEmail:{type:String,required:true},
    product_image_url:{type:String,required:true},
},
    {timestamp:true,
     versionKey:false
    }
);
const product = mongoose.model("users",productSchema);
module.exports = product;