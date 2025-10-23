
import User from "../modals/authModal.js"
import jwt from "jsonwebtoken";

export const get_profile_data = async (req, res) => {
    console.log("sldfjlskjfklsdkf11")
    try {
        return res.json({
            success: true,
            message: "Profile data fetched successfully!!",
            data: req.user
        })
    }
    catch (e) {
        return res.json({ message: e })
    }
}

export const update_profile_data = async (req, res) => {
    try {
  
        const { name, address } = req.body;
        const data = req.user;
        const email = data.email;

        const updatedUser = await User.findOneAndUpdate(
            { email},
            { name, address }
        )
        const newupdateddata = await User.findOne({email});
        if (!updatedUser) return res.json({ messate: "User not found" });
        return res.json({ success: true, message: "Update ho gaya hai", data: newupdateddata })
    }
    catch (e) {
        console.log(e)
        res.json(e);
    }



}