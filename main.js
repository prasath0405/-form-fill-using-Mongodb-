const express = require ('express');
const { default: mongoose } = require('mongoose'); 
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/datacollection",{}).then(()=>{
  console.log("mongodb connected");
})
 app. set("view engine","ejs");
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 app.use('/',require('./server/router/routes'))

 app.listen(2199,()=>{
  console.log("port connected");
 })