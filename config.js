
import mongoose from "mongoose";


const db = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => console.log("Database connected successfully")).catch((e) => console.log("Error ocurred while db connection" + e))

}

export default db;
