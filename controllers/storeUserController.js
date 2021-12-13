const User = require('../database/models/User')

modules.exports = (req,res)=>{
    User.create(req.body,(error,user)=>{
        res.redirect('/')
    })
    

}