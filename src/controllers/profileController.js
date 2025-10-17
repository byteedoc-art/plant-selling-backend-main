
import User from "../modals/authModal.js"
import jwt from "jsonwebtoken";

export const get_profile_data = async (req, res) => {

    try {
        const token = req.headers.authorization;
        const data = jwt.verify(token, "plant123");

        const email = data.email;
        console.log(email)

        let userdata = await User.findOne({ email });
        if (!userdata) return res.status(400).json({ "success": false, message: "Email already is used!!" });

        return res.json({
            success: true,
            message: "Profile data fetched successfully!!",
            data: userdata
        })
    }
    catch (e) {
        return res.json({ message: e })
    }


}

export const update_profile_data = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { name,address} = req.body;
        const data = jwt.verify(token, "plant123");
        const email = data.email;
        console.log(email)
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { name,address }
        )
        if(!updatedUser) return res.json({messate:"User not found"});
        return res.json({ success:true, message:"Update ho gaya hai", data: updatedUser })
    }
    catch (e) {
        console.log(e)
        res.json(e);
    }



}