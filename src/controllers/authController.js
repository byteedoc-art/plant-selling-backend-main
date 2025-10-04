
import User from "../modals/authModal.js";


export const signup = (req, res) => {
    try {
        console.log("sigup is running")

        const { email, password } = req.body;

        if (email == null || password == null) {
            return res.status(400).json({ "status": 400, "message": "Email and Password is required !!" })
        }

        return res.status(200).json({ "status": 400, "message": "Your are login succesfully" })
    }
    catch (e) {
        res.json({ "message": "error", e })
    }


}

