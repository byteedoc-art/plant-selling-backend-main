import jwt from 'jsonwebtoken';
import User from '../modals/authModal.js'



const authMiddleware = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
        const maintoken = token.split(" ")[1];
        const data = jwt.verify(maintoken, "plant123");
      

        const email = data.email;
        let userdata = await User.findOne({ email });
        if (!userdata) return res.status(400).json({ "success": false, message: "User not found" });
         req.user = userdata;
        next();
    }
    catch (e) {
        console.log(e)
    }




}

export default authMiddleware;