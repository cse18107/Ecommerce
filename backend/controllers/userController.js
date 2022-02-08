const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/userModel");

// Register a user
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;
    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"ProfilePicUrl"
        }
    });
    res.status(201).json({
        success:true,
        user
    });
})