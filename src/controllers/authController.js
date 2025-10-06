
import User from "../modals/authModal.js";
import tokeGenerator from "../utils/tokenGenerator.js";



export const signup = async (req, res) => {
    try {
        console.log("sigup is running")
        const { name, email, password } = req.body;

        if (name == null || email == null || password == null) {
            return res.status(400).json(
                {
                    "status": 400,
                    "message": "Name,Email and Password is required !!"
                }
            )
        }

        let userdata  = await User.findOne({email});
         if(userdata) return res.status(400).json({message:"Email already is used!!"});


        // this is for new user
        const user = new User({ name, email, password });
        await user.save().then(() => {
             console.log("Data have been saved")
             }).catch((e) => {
                 console.log("Error while signup", e) 
          })

        const token = tokeGenerator({name,email});

        return res.status(200).json(
            {
                "status": 400,
                "message": "Your are login succesfully",
                "token":token
            }
        )
    }
    catch (e) {
        res.json({ "message": "error", e })
    }


}

