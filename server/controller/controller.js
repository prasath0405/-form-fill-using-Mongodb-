const modelfilecalling = require('../model/model');

exports.datacreate = (req,res)=>{
    let datasaving  = new modelfilecalling({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        country:req.body.country,
        number:req.body.number,
        address:req.body.address,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        code:req.body.code,


    })

    datasaving.save().then((ss)=>{
        console.log(ss);
        res.redirect('/thankyou')
    })
}

exports.getting = (req,res)=>{
    modelfilecalling.find().then((datas)=>{
        res.submit(datas)
    })
}