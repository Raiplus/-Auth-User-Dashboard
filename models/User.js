import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{type:String},
    user_email: { type: String, required: true },
    password: { type: String, required: true },
   
});

// Export the corrected model
export const User = mongoose.model('User', userSchema);
