const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    try{
        let token = req.headers.authorization;
        if(!token){
            return res.status(401).send({
                success:false,
                message:"token required",
            })
        }
        let newtoken = token.slice(7);
        jwt.verify(newtoken,'rnw',(err,decodeToken)=>{
            if(err){
                return res.status(401).send({
                    success:false,
                    message:"invaild token",
                })
            }
            req.user = decodeToken.payload;
            return next();
        })
    }catch(err){
        return res.status(501).send({
            success:false,
            err:err
        })
    }
}

const Admin = async(req,res,next) => {
    try{
        if(req.user.role != "admin"){
            return res.status(400).send({
                success : false,
                message : "Unauthorised Access",
            })
        }  
        return next();
    }catch(err){
        return res.status(501).send({
            success : false,
            message : err
        })
    }
}

module.exports = {
    verifyToken,Admin
}