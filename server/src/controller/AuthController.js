import User from '../models/User.js'
import CRYPTOJS from 'crypto-js'
import dotenv from 'dotenv'
import jsonwebtoken from 'jsonwebtoken'

dotenv.config()


const token = (user)=>{
    const payload = {
        id:user._id,
        isAdmin:user.isAdmin
    }
    const options = {
        expiresIn:'5d'
    }

    const generateToken = jsonwebtoken.sign(payload,process.env.SECRET_KEY,options)

    return generateToken
}

// REGISTER
export const register =async(req,res) => {

    const {username,email,password} = req.body

    const hashPassword = CRYPTOJS.AES.encrypt(password,process.env.SECRET_KEY).toString()

    await User.create({username:username,email:email,password:hashPassword}).then((response)=>{
        
        return res.status(200).json({
            success: true,
            message: "User created successfully"
        })
    }).catch((err) => {
        return res.status(500).json({
            success: false,
            message:`Unable to register user ${err.message}`
        })
    })

}

// LOGIN

export const login = async(req, res) => {

    const {email,password} = req.body

    const existUser = await User.findOne({ email:email})
    if(!existUser){
        res.status(404).json({
            success: false,
            message:`User not found`
        }) 
    }
    // -- decrypt the password
    const bytes = CRYPTOJS.AES.decrypt(existUser.password,process.env.SECRET_KEY)
    const originalPassword = bytes.toString(CRYPTOJS.enc.Utf8)
    // --check the password
    if(originalPassword !== password){
        res.status(404).json({message:`Invalid password`})
    }

    const loginedUser = {...existUser._doc,token:token(existUser)}

    res.status(200).json(loginedUser)
}




