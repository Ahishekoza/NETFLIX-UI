import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verify = async(req,res,next)=>{
    const authHeader =  req.headers.token
    if(!authHeader){
        return res.status(401).json({
            message:"You are not authorized"
        })
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({
                message:'Token is not valid'
            })
        }
        req.user = user
        next()
    }) 
}