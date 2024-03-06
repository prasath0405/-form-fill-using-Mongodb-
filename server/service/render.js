exports.hari =(req,res)=>{
 res.render('index')
}
exports.prasath=(req,res)=>{
 res.render('thankyou')
}
let axios = require('axios')
exports.datasfile = (req,res)=>{
    axios.get("http://localhost:2199/api/post").then(function (response) {
        console.log(response);
        res.render('datas',{user:response.data})
    })
}