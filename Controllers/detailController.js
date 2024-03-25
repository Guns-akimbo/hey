const detailsModel = require("../Model/detailModel")
exports.loginInfo =async(req,res)=>{
    try {
        const{email,password}= req.body
        const login =await detailsModel.create(req.body)
        await login.save()
        return res.status(200).json({
            message:"successful",
            data:login
        })
    } catch (error) {
        return res.status(300).json({
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