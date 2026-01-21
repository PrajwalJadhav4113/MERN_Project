import mongoose,{Schema} from "mongoose";
const videoSchema = new Schema({

    videoFile:{
        type:String,    // Clodnary url
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    titel:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    isPublished:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true})
export const Video = mongoose.model("Video",videoSchema)