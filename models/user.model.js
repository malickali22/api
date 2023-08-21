import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone:{
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isSeller: {
    type: Boolean,
    default:true
  },
  verified: { 
    type: Boolean,
     default: false 
    },
 isBlocked:{
  type: Boolean,
  default: false
    },
},{
  timestamps:true
});



export default mongoose.model("User", userSchema)