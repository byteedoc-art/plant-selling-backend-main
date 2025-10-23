 import mongoose from "mongoose";

 const RolesSchema=new mongoose.Schema({
    name:String,
    require:true
 })
 
 const  Roles = mongoose.model("roles", RolesSchema)
 export default  Roles;