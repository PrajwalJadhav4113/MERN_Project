import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true           //Its used when we want search some field
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
    
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true           //Its used when we want search some field
        },
        avatar:{
            type:String,   //clodinary url
            required:true,
        },
        coverImage:{
            type:String,   //clodinary url
            
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],

        password:{
            type:String,
            required:[true,'Password is required'],
        },

        refreshToken:{
            type: String
        },


    },{timestamps:true}
)

// this is middleware
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10)  // that 10 is roundes
    next()
})

// Now we create method isPasswordCorrect they return in (true /false)
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)  // they compampair user plain password and user hash password
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY  //expires in 
        } 
    )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        } 
    )
}
export const User = mongoose.model("User",userSchema)