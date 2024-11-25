const UserModel = require('../models/UserModel')

const dashboardPage =(req,res)=>{
    return res.render('dashboard')
}

module.exports={
    dashboardPage
}