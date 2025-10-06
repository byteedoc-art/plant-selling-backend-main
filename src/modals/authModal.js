
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

const User =  mongoose.model("users",UserSchema)
export default User;


// import mongoose from "mongoose";
// const UserSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         require: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         require: true
//     }
// });

// const User =  mongoose.model("users",UserSchema);
// export default User;







