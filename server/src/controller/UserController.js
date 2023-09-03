import User from '../models/User.js'
import CRYPTOJS from 'crypto-js'
import dotenv from 'dotenv'

dotenv.config()


// UPDATE
export const updateUser = async(req,res) =>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CRYPTOJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString() 
        }
        // -- {new:true} is use to give the updated data value
        await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((UpdatedUser)=>{
            res.status(200).json({
                message:"User Updated Successfully",
                User:UpdatedUser
            })
        }).catch((err)=>{
            res.status(404).json({
                message:"User Not Found"
            })
        })
    }
    else{
        res.status(403).json({
            message:"You can Update only your account"
        })
    }
} 

// DELETE
export const deletUser = async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){

        await User.findByIdAndDelete(req.params.id).then(()=>{
            res.status(200).json({
                message:"User deleted Successfully"
            })
        }).catch(()=>{
            res.status(402).json({
                message:"User Don`t Exist"
            })
        })

    }
    else{
        res.status(403).json({
            message:"You can DELETE only your account"
        }) 
    }
}

// GET ALL
// ---- only Admin can see all the users
export const getAllUsers = async(req,res)=>{

    await User.find().then((users)=>{
        res.status(200).json({
            Users:users
        })
    }).catch((err)=>{
        res.status(403).json({
            message:"Unable To get Users"
        })
    })

}
// GET ALL
export const getUserById = async(req,res)=>{

    await User.findById(req.params.id).then((user)=>{
        res.status(200).json({
            User:user
        })
    }).catch((err)=>{
        res.status(403).json({
            message:"Unable To get User"
        })
    })

}
// GET USER STATS
export const userSubscribedPerMonth =async(req,res)=>{
    const today = new Date()
    console.log(today)
    const lastYear =  today.setFullYear(today.setFullYear()-1)
    console.log(lastYear)

    // const monthsArray = [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    // ]

    await User.aggregate([
        { 
            $project :{ month :{$month : "$createdAt"}}
        },
        {
            $group:{
                _id:"$month",
                total:{$sum:1}
            }
        }
    ]).then((response)=>{
        
        res.status(200).json({
            Users:response
        })
    }).catch((err)=>{
        res.status(400).json({
            message:"error"
        })
    })

     
} 