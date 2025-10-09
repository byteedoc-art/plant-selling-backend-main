
import User from "../modals/authModal.js";
import tokeGenerator from "../utils/tokenGenerator.js";

export const signup = async (req, res) => {
    try {
        console.log("sigup is running")
        const { name, email, password } = req.body;

        if (name == null || email == null || password == null) {
            return res.status(400).json(
                {
                    "success": false,
                    "message": "Name,Email and Password is required !!"
                }
            )
        }

        let userdata = await User.findOne({ email });
        if (userdata) return res.status(400).json({ "success": false, message: "Email already is used!!" });

        const user = new User({ name, email, password });
        await user.save().then(() => {
            console.log("Data have been saved")
        }).catch((e) => {
            console.log("Error while signup", e)
        })

        const token = tokeGenerator({ email,password });

        return res.status(200).json(
            {
                "success": true,
                "message": "Your are register succesfully",
                "token": token
            }
        )
    }
    catch (e) {
        res.json({ "message": "error", e })
    }
}



// login controller 
export const login = async (req, res) => {

    const { email, password } = req.body;


    
    // let userdata  = await User.findOne({email});
    //  if(userdata) return res.status(400).json({ "success":false, message:"Email already is used!!"});

    const user1 = await User.findOne({ email });
    console.log(user1.password)
    
    if (!user1) return res.status(404).json({  success: false , message: "aap dbms me nahi hai" })
    if(password != user1.password) return res.status(400).json({
        success: false ,
        message: "Password Galat hai sahi enter karo " 
    
    })

    const token = tokeGenerator({ email,password });

    return res.status(200).json(
        {
            success: true,
            message: "Your are login succesfully",
            data:{token:token}
        }
    )

}