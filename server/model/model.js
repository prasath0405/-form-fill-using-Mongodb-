const mongoose = require  ('mongoose');
 
const mongodbdatas =new mongoose.Schema({

 firstname:{
  type:String,
  required:true
},
lastname:{
 type:String,
 required:true
},
email:{
  type:String,
  required:true
},
country:{
 type:String,
 required:true
},
number:{
 type:String, 
 required:true
},
address:{
 type:String,
 required:true
},
street:{
 type:String,
 required:true
},
city:{
 type:String,
 required:true
},
state:{
 type:String,
 required:true
},
code:{
 type:String,
 required:true
},
})
const mongodbdatasexport = mongoose.model("collectiondata",mongodbdatas);

module.exports = mongodbdatasexport