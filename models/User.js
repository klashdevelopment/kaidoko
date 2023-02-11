import mongoose from "mongoose";
var user = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
});
// user.methods.a = ()=>{};
export default mongoose.model("User", user, "Users");